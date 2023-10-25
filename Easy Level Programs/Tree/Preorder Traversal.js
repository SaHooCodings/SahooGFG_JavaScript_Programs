class Solution {
    //Function to find the preorder traversal of the tree.
    preorderUtil(root, res)
    {
      if (root === null)
        return;
      res.push(root.data);
      this.preorderUtil(root.left, res); 
      this.preorderUtil(root.right, res); 
    }
    preorder(root)
    {
        let res = [];
        this.preorderUtil(root, res);
        //returning the list.
        return res;
    }
}
