class Solution {
    
    minValueToBalance(arr,n){
        let sum1 = 0;
        for (let i = 0; i < n/2; i++)
            sum1 += arr[i];
        let sum2 = 0;
        for (let i = n/2; i < n; i++)
            sum2 += arr[i];
        return Math.abs(sum1 - sum2);
    }
}
