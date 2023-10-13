class Solution {
    isVowel(c) 
    {
        //code here
        let vowels = ["A","E","I","O","U"];
        return vowels.includes(c.toUpperCase())?"YES":"NO"
    }
}
