function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const invertTree = (root) => {
  if (!root) return null;
  let left = root.left;
  let right = root.right;
  root.left = invertTree(right);
  root.right = invertTree(left);

  return root;
}

let tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(9);

console.log(invertTree(tree)); // [4,7,2,9,6,3,1]