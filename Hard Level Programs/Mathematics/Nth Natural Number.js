class Solution {
    findNth(N)
    {
        let s="";
        var result  = 0
        var p = 1
        while(N>0)
        {
            result+=(p*(N%9));
            N=Math.floor(N/9);
            p=p*10;
        }
        return result;
    }
}
