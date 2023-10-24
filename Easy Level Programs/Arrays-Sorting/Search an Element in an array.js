class Solution {
    search(arr, N, X) {
        // iterate over the array elements
        for(let i=0; i<N; i++) {
            // check if the element is equal to x
            if(arr[i] == X) return i;
        }
        
        return -1;
    }
}
