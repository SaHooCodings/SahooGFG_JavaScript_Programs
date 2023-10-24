class Solution{
    lastIndex(S){
        let flag = false;
        let n = S.length;
        for (let i = n - 1; i >= 0; i--) {
            if (S[i] === '1') {
                flag = true;
                return i;
                break;
            }
        }

        if (flag === false) {
            return -1;
        }
    }
}
