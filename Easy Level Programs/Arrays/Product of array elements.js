class Solution {
    product(arr, n,mod){
        //code here
        let ans = 1;
        for(let i=0; i<n; i++){
            arr[i] = arr[i] % mod;
            ans = (ans * arr[i]) % mod;
        }
        return ans;
    }
}
