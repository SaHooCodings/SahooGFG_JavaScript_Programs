class Solution {
    game_with_number(arr,n){
       for(let d=0; d < n-1; d++) {
           arr[d] = arr[d] ^ arr[d+1];
       }
       return arr;
    }
}
