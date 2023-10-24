class Solution {
    longest(names,n){
        //code here
        let longestName = '';
        for(const name of names){
            if(name.length > longestName.length){
                longestName = name;
            }
        }
        return longestName;
    }
}
