class Solution{
    gcd(A, B){
        if (B === 0)
            return A;
        return this.gcd(B, A % B);
    }
}
