class Solution {
    missingNumber(array, n) {
        let i, total; 
        total = (n + 1) * (n) / 2; 
        for (i = 0; i < n-1; i++) 
            total -= array[i]; 
        return total; 
    }
}
