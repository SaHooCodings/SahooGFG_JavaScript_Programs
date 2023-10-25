class Solution {
    SortedMerge(a, b)
    {
    	let result = null;
    	if (a === null)
    		return (b);
    	else if(b === null)
    		return (a);
    	if(a.data <= b.data)
    	{
    		result = a;
    		result.next = this.SortedMerge(a.next, b);
    	}
    	else
    	{
    		result = b;
    		result.next = this.SortedMerge(a, b.next);
    	}
    	return result;
    }
    mergeKLists(arr, K)
    {
        let N = K;
        let last=N-1; 
        
    	while (last !== 0)
    	{
    		let i = 0, j = last;
    		while (i < j)
    		{
    			arr[i] = this.SortedMerge(arr[i], arr[j]);
    			//going for the next pair of lists.
    			i++, j--;
    			if (i >= j)
    				last = j;
    		}
    	}
    	return arr[0];
    }
}
