class Solution {
    findElements(arr,n){
       let sortedArr = arr.sort((a,b) => a-b);
       let res = [];
       for (let i=0; i<n-2; i++){
           res.push(sortedArr[i]);
       }
       return res;
    }
}
