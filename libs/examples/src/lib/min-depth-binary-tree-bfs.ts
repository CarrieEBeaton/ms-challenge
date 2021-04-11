
//* Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 1;
  }
  let que = [];
  let minLength = 1;
  que.push(root);
  while (que.length > 0) {

    let len = que.length;
    for (let i = 0; i < len; i++) {
      let node = que.shift();
      if (!node.left && !node.right) {
        return minLength;
      }
      if (node.left) {
        que.push(node.left);
      }
      if (node.right) {
        que.push(node.right);
      }
    }
    minLength++;
  }
  return minLength;
};
