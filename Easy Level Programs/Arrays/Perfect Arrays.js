class Solution{
    IsPerfect(arr,n){
        for(let i=0;i<n/2;i++){
            if(arr[i] !== arr[n-i-1])
                return false;
        }    
        return true;
    }
}
