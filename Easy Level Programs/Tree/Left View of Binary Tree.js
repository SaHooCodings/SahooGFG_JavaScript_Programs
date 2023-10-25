class Solution {
     leftViewUtil(result, root, level, max_level) {
    if (root == null) {
      return;
    }
    if (max_level[0] < level) {
      result.push(root.data);
      max_level[0] = level;
    }
    this.leftViewUtil(result, root.left, level+1, max_level);
    this.leftViewUtil(result, root.right, level+1, max_level);
  }
     leftView(root)
    {
        //your code here
        let max_level = [0];
    let result = [];
    this.leftViewUtil(result, root, 1, max_level);
    //returning the list.
    return result;
    }
}
