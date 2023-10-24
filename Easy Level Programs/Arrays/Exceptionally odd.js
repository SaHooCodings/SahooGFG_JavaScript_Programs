class Solution{
    getOddOccurrence(arr,n){
        let res = 0;
        for(let i=0; i<n; i++){
            res = res ^ arr[i];
        }
        return res;
    }
}
