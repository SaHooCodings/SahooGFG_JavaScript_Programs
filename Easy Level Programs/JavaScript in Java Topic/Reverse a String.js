class Solution {
    revStr(s)
    {
       //code here
       let S = ""
       for(let i = s.length-1;i >= 0;i--)
       {
           S += s[i]
       }
       return S
    }
}
