class Solution {
    countLeaves(root){
		if(root==null)
			return 0;
		if(root.left==null && root.right==null)
			return 1;
		return this.countLeaves(root.left)+this.countLeaves(root.right);
  	}
}
