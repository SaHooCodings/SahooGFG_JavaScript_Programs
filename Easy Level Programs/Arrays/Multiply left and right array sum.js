class Solution {
    multiply(arr,n){
       let sum1 = 0; 
       for(let i = 0;i<Math.floor(n/2);i++){
        sum1+=arr[i]; 
       }
       let sum2 = 0; 
       for(let j = Math.floor(n/2);j<n;j++){
        sum2+=arr[j];
       }
       return (sum1 * sum2); 
    }
}
