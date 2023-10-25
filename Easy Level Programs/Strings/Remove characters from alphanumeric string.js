class Solution {
  removeCharacters(s) {
    let result = "";

    for(let i = 0; i < s.length; i++){
        if(!isNaN(parseInt(s[i]))){
            result += s[i];
        }
    }

    return result;
  }
}
