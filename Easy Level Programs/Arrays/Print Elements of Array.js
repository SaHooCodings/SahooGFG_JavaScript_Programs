class Solution {
    printArray(arr, n) {
        // code here
        let s = ''
        for(let i = 0;i < n;i++)
        {
            s += arr[i]
            s += ' '
        }
        console.log(s)
    }
}
