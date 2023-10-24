class Solution{
    getMinMax(arr,n){
        let mn = Infinity, mx = -Infinity;
        for (let i = 0; i < n; i++) {
            mn = Math.min(arr[i], mn);
            mx = Math.max(arr[i], mx);
        }
        return [mn, mx];
    }
}
