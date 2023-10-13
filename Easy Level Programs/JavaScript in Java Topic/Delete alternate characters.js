class Solution{
    delAlternate(S)
    {
        //code here
        let s = ""
        for(let i = 0;i < S.length;i+=2)
        {
            s+=S[i]
        }
        return s
    }
}
