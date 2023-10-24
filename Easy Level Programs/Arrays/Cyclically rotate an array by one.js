class Solution{
  rotate(arr,n){
    let x = arr[n-1];
    for (let i = n-1; i > 0; i--){
      arr[i] = arr[i-1];
    }
    arr[0] = x;
    return arr;
  }
}
