class Solution 
{
    // Function to check if Kth bit is set or not.
    checkKthBit(n, k)
    {
        //code here
        return ((n>>k)&1)!=0
    }
}
