class Solution {
    find(arr,n,x){
       let a1=-1;
       let a2=-1;
       for(let i=0;i<n;i++){
           if(arr[i]==x){
               a1=i;
               break;
           }
       }
       for(let i=n-1;i>=0;i--){
           if(arr[i]==x){
               a2=i;
               break;
           }
       }
       return [a1,a2];
    }
}
