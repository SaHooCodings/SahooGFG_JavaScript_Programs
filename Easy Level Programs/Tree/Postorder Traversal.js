class Solution {
    //Function to find the postorder traversal of the tree.
    postorderUtil(root, res)
    {
      if (root === null) 
        return;
      this.postorderUtil(root.left, res);
      this.postorderUtil(root.right, res); 
      res.push(root.data);
    }
    postOrder(root)
    {
        let res = [];
        this.postorderUtil(root, res);
        //returning the list.
        return res;
    }
}
