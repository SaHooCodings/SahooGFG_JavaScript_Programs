class Solution{
    getMoreAndLess(arr,n, x){
        let l = 0;
        let r = n-1;
        let count1 = 0;
        let count2 = 0;
        
        // Finding the count of elements less than or equal to x
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(arr[mid]<=x){
                count1 = mid + 1;
                l = mid + 1;
            }
            else{
                r = mid - 1;
            }
        }
        
        // Finding the count of elements more than or equal to x
        l = 0;
        r = n-1;
        
        while(l<=r){
            let mid = Math.floor((l+r)/2);
            if(arr[mid]>=x){
                count2 = n - mid;
                r = mid - 1;
            }
            else{
                l = mid + 1;
            }
        }
        
        return [count1, count2];
    }
}
