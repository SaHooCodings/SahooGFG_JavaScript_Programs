class Solution {
    inorderUtil(root, res) {
        if (root === null) return;
        this.inorderUtil(root.left, res);
        res.push(root.data);
        this.inorderUtil(root.right, res);
    }
    inOrder(root) {
        let res = [];
        this.inorderUtil(root, res);
        // returning the list.
        return res;
    }
}
