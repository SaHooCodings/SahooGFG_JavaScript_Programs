class Solution
{
    //Function to check if two arrays are equal or not.
    check(A,B,N)
    {
        // code here
        let mp = new Map()
        for(let i = 0;i < N;i++)
        {
            if(!mp.has(A[i]))
                mp.set(A[i],0)
            mp.set(A[i],mp.get(A[i])+1)
        }
        for(let i = 0;i < N;i++)
        {
            if(!mp.has(B[i]))
                mp.set(B[i],0)
            mp.set(B[i],mp.get(B[i])-1)
        }
        for(let [key, value] of mp)
        {
            if(value!=0)
            {
                return false
            }
        }
        return true
    }
}
