class Solution{
    maxProduct(arr,n){
        let max = 0;
        let secondMax = 0;
        for(let i=0; i<n; i++){
            if(arr[i]>=max){
                secondMax = max;
                max = arr[i];
            }else if(arr[i]>=secondMax){
                secondMax = arr[i];
            }
        }
        return max * secondMax;
    }
}
