class Solution {
    
    PalinArray(arr,n){
        //code here
        for(let i = 0;i < n;i++)
        {
            let num = arr[i].toString()
            let s = num.split('').reverse().join('')
            if(num != s)
            {
                return 0
            }
        }
        return 1
    }
}
