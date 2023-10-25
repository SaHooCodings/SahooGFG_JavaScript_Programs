class Solution {
  check(s){
    const ch = s[0];
    for (let i = 1; i < s.length; i++){
      if (s[i] !== ch){
        return false;
      }
    }
    return true;
  }
}
