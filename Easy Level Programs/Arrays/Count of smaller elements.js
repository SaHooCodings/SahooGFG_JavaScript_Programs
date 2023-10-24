class Solution{
    countOfElements(arr,n, x){
        let count = 0;
        for(let i = 0; i < n; i++){
            if(arr[i] <= x){
                count++;
            }
        }
        return count;
    }
}
