class Solution {
    isSubSequence(A,B){
       let j = 0; 
        for (let i=0; i<B.length && j<A.length; i++) {
            if (A[j] === B[i]) {
                j++; 
            }
        }
        return (j === A.length); 
    }
}
