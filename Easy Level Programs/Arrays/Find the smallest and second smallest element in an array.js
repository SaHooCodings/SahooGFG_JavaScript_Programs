class Solution{
    minAnd2ndMin(arr,n){
        let min1 = arr[0];
        let min2 = Number.MAX_VALUE;

        for(let i=1; i<n; i++){
            if(arr[i] < min1){
                min2 = min1;
                min1 = arr[i];
            }else if(arr[i] < min2 && arr[i] !== min1){
                min2 = arr[i];
            }
        }

        if(n === 1 || min2 === Number.MAX_VALUE){
            return [-1];
        }else{
            return [min1, min2];
        }
    }
}
