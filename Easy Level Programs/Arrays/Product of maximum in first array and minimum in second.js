class Solution{
    find_multiplication(a,n,b,m){
        // Find the maximum element from array a
        let maxA = Math.max(...a);
        // Find the minimum element from array b
        let minB = Math.min(...b);
        // Return the product of maxA and minB
        return maxA * minB;
    }
}
