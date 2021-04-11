/**
 * Definition for a binary tree node. */
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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {

  let list: number[] = [];
  let list2: number[] = [];
  getLeaves(root1, list);
  getLeaves(root2, list2)
  console.log(list);
  console.log(list2);
  const same = JSON.stringify(list) === JSON.stringify(list2);
  return same;
};

function getLeaves(root: TreeNode | null, list: number[]) {
  if (root === null) {
    return;
  }

  if (root.right === null && root.left === null) {
    list.push(root.val);
    return;
  }
  getLeaves(root.left, list);
  getLeaves(root.right, list);
}