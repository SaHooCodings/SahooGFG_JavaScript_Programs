class Solution {
    countNonLeafNodes(root) {
        if (root == null || (root.left == null && root.right == null)) return 0;
        return 1 + this.countNonLeafNodes(root.left) + this.countNonLeafNodes(root.right);
    }
}
