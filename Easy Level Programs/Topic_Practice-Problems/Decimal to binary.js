class Solution {
    toBinary(N){
       //code here
       let s = ""
       if(N==0)
       {
           console.log("0")
           return;
       }
       while(N >= 1)
       {
           s = N%2 + s
           N = Math.floor(N/2)
       }
       console.log(s)
    }
}
