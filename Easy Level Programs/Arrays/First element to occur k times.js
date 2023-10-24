class Solution{
    firstElementKTime(arr,n,k){
        let mp = new Map();
        for(let i = 0;i<n;i++){
            mp.set(arr[i],(mp.get(arr[i]) || 0)+1);
            if(mp.get(arr[i]) === k){
                return arr[i];
            }
        }
        return -1;
    }
}
