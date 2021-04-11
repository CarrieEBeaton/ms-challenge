function findMinHeightTrees(node: number, edges: number[][]) {
  if (node === 1) {
    return [0];
  }

  if (node === 2) {
    return edges[0];
  }

  let roots = this.createGraph(edges);


  // fill queue with all leaves ( all that has only one ( e.g. parent ) adjacent root)
  let queue = [];
  for (let i = 0; i < node; i++) {
    if (roots.get(i).size === 1) {
      queue.push(i);
    }
  }


  // bfs, remove leaves, and push to queue their parents if they become leaf.
  while (queue.length !== roots.size) {

    const currentLevelLength = queue.length;

    for (let i = 0; i < currentLevelLength; i++) {

      const leaf = queue.shift();
      const parentVal = roots.get(leaf).keys().next().value; // first and the only element in leaf adjacents Set
      const parent = roots.get(parentVal);

      roots.delete(leaf);
      parent.delete(leaf);

      if (parent.size === 1) {
        queue.push(parentVal);
      }
    }
  }
  return queue;
}

function createGraph(edges) {

  let roots = new Map();

  for (let i = 0; i < edges.length; i++) {
    const first = edges[i][0];
    const second = edges[i][1];
    if (!roots.get(first)) {
      roots.set(first, new Set());
    }
    if (!roots.get(second)) {
      roots.set(second, new Set());
    }

    roots.get(first).add(second);
    roots.get(second).add(first);
  }

  return roots;
}