class Solution {
    //Function to return the count of number of elements in union of two arrays.
    doUnion(a, n, b, m){\
        let s1 = new Set();
        let count = 0;
    	for(let i=0;i<n;i++)
    		s1.add(a[i]);
    	for(let i=0;i<m;i++)
    	    s1.add(b[i]);
    	return s1.size;
    }
    
}
