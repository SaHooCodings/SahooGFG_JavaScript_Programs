class Solution {
    fascinating(N){
       let s = N.toString() + (N * 2).toString() + (N * 3).toString();
       let hash = Array(10).fill(0);
       for (let i = 0; i < s.length; i++) {
           let digit = parseInt(s.charAt(i));
           hash[digit]++;
       }
       for (let i = 1; i <= 9; i++) {
           if (hash[i] !== 1) {
               return false;
           }
       }
       return true;
    }
}
