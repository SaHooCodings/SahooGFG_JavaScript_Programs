class Solution{
    
    isBST(node) {
        return this.isBSTUtil(node, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }
    
    isBSTUtil(node, min, max) {
        if (node === null) {
            return true;
        }
        if (node.data < min || node.data > max) {
            return false;
        }
        return (
            this.isBSTUtil(node.left, min, node.data - 1) &&
            this.isBSTUtil(node.right, node.data + 1, max)
        );
    }
}
