class Solution {
  longestPalinSubseq(S){
    let n = S.length;
    let B = S.split('').reverse().join('');

    let dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 0; i <= n; ++i) {
        for (let j = 0; j <= n; ++j) {
            if (i === 0 || j === 0) dp[i][j] = 0;
            else {
                if (S[i - 1] === B[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
                else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[n][n];
  }
}
