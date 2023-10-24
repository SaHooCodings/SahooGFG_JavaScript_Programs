class Solution {
    
    firstAndLast(arr, N, X)
    {
        //your code here
        let first = -1;
        let last = -1;
        
        // Finding first occurrence of X
        for (let i = 0; i < N; i++) {
            if (arr[i] == X) {
                first = i;
                break;
            }
        }
        
        // Finding last occurrence of X
        for (let i = N-1; i >= 0; i--) {
            if (arr[i] == X) {
                last = i;
                break;
            }
        }
        
        let ans = [];
        
        if (first == -1 && last == -1) {
            ans.push(-1);
        } else {
            ans.push(first);
            ans.push(last);
        }
        
        return ans;
    }
}
