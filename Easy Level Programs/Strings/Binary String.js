class Solution 
{
    //Function to count the number of substrings that start and end with 1.
    binarySubstring(n, a)
    {
        let count = 0;
        for(let i=0;i<n;i++)
        {
            //counting number of 1's in the string.
            if(a[i]=='1')
            count++;
        }
        //returning count of possible pairs among total number of 1's.
        return Math.floor((count*(count-1))/2);
    }
}
