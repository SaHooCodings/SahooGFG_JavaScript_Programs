class Solution {
  print(arr,n){
    //code here
    let s = ""
    for(let i = 0;i < n;i += 2)
    {
        s += arr[i]+" "
    }
    console.log(s)
  }
}
