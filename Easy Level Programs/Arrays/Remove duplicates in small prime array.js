class Solution {
    removeDuplicate(a, n) {
        const dp = new Array(100).fill(0);
        const v = [];

        for (let i = 0; i < n; i++) {
            if (dp[a[i]] === 0) {
                dp[a[i]] = 1;
                v.push(a[i]);
            }
        }

        return v;
    }
}
