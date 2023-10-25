class Solution {
    // Function to find the minimum element in the given BST.
    minValue(root) {
        // base case
        if (root === null) return -1;

        let current = root;
        while (current.left !== null) {
            current = current.left;
        }
        return (current.data);
    }
}
