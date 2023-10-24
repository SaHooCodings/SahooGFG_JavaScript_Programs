class Solution {
  kthSmallest(arr,l,r,K){
    arr.sort((a,b) => a-b);
    return arr[K-1];
  }
}
