class Solution{
    valueEqualToIndex(arr,n){
        let res = [];
        for(let i=0; i<n; i++){
            if(arr[i] === i+1){
                res.push(i+1);
            }
        }
        return res;
    }
}
