class Solution{
    // function to find the index of first '1' 
    // binary search technique is applied 
    indexOfFirstOne(arr,  low,  high) 
    { 
        while (low <= high) { 
            let mid = Math.floor((low + high) / 2); 
      
            // if true, then 'mid' is the index of first '1' 
            if (arr[mid] === 1 && (mid === 0 || arr[mid - 1] === 0)) 
                return mid; 
      
            // first '1' lies to the left of 'mid' 
            else if (arr[mid] === 1) 
                high = mid - 1; 
      
            // first '1' lies to the right of 'mid' 
            else
                low = mid + 1; 
        } 
      
        // 1's are not present in the array 
        return -1; 
    } 
    
    
    
    firstIndex(a,  n) {
        
        return this.indexOfFirstOne(a, 0, n - 1);
    }
}
