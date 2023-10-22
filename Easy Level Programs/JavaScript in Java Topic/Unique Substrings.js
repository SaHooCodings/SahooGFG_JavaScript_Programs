class Solution {
  unique_substring(str) {
    //code here
    let s = new Set()
    for(let i = 0;i < str.length;i++)
    {
        let substr = ""
        for(let j = i;j < str.length;j++)
        {
            substr = substr + str[j]
            s.add(substr)
        }
    }
    return s.size
  }
}
