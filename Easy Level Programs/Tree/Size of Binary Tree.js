class Solution {
    getSize(root) {
        if (root === null) {
            return 0;
        }
        return this.getSize(root.left) + 1 + this.getSize(root.right);
    }
}
