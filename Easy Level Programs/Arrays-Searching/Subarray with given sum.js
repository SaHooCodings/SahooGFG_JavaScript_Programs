class Solution
{
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s)
    {
        let last=0;
        let start=0;
        let currsum=0;
        let flag=false;
        let res = [];
        
        //iterating over the array.
        for(let i=0; i<n; i++)
        {
            //storing sum upto current element.
            currsum += arr[i];
            
            //checking if current sum is greater than or equal to given number.
            if(currsum>=s)
            {
                last=i;
                //we start from starting index till current index and do the 
                //excluding part while s(given number) < currsum.
                while(s<currsum && start<last)
                {
                    //subtracting the element from left i.e., arr[start]
                    currsum -= arr[start];
                    ++start;
                }
                
                //now if current sum becomes equal to given number, we store 
                //the starting and ending index for the subarray.
                if(currsum==s)
                {
                    res.push(start + 1);
                    res.push(last + 1);
                    
                    //flag is set to true since subarray exists.
                    flag = true;
                    break;
                }
            }
        }
        //if no subarray is found, we store -1 in result.
        if(flag==false)
            res.push(-1);
            
        //returning the result.
        return res;    
    }
}
