class Solution {
    findIndex(a,n,key){
       let start = -1;
        
        for (let i=0; i<n; i++)
        {
            if (a[i] === key)
            {
                start = i;
                break;
            }
        }
        let end = start;
        for (let i=n-1; i>=0; i--)
        {
            if (a[i] === key)
            {
                end = i;
                break;
            }
        }
        return [start, end]; 
    }
}
