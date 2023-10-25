class Solution
{ 
  // Function to calculate the sum of all nodes in a binary tree
  sumBT(root){
     // Check if the root is null, in which case return 0 as there are no nodes present
     if(root===null) return 0;
     
     // Return the sum of the current root's value, left subtree sum, and right subtree sum
     return (root.data + this.sumBT(root.left) + this.sumBT(root.right));
  }
}
