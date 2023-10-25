class Solution {
    nextGap(gap) 
    { 
    	if (gap <= 1) 
    		return 0; 
    	return Math.floor(gap / 2) + (gap % 2); 
    } 

    merge(arr1, arr2, n, m)
    {
        let i, j, gap = n + m; 
	
    	for (gap = this.nextGap(gap); gap > 0; gap = this.nextGap(gap)) 
    	{ 
    		for (i = 0; i + gap < n; i++) 
    			if (arr1[i] > arr1[i + gap]) 
    				[arr1[i], arr1[i + gap]] = [arr1[i + gap], arr1[i]];
    
    		if(gap>n){
    		    j = gap-n;
    		}
    		else{
    		    j = 0;
    		}
    		for (; i < n && j < m; i++, j++) 
    			if (arr1[i] > arr2[j]) 
    				[arr1[i], arr2[j]] = [arr2[j], arr1[i]];
            
    
    		if (j < m) 
    		{ 
    			for (j = 0; j + gap < m; j++) 
    				if (arr2[j] > arr2[j + gap]) 
    					[arr2[j], arr2[j + gap]] = [arr2[j + gap], arr2[j]];
    		} 
    	} 
    }
}
