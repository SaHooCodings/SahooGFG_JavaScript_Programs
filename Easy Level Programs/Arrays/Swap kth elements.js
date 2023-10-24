class Solution{
    swapKth(arr,n,k){
        //code here
        [arr[k-1],arr[n-k]] = [arr[n-k],arr[k-1]]
    }
}
