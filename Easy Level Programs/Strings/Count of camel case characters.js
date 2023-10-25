class Solution{
    countCamelCase(s){
        let res = 0;
    	for (let i = 0; i < s.length; ++i)
    		if (s[i] >= 'A' && s[i] <= 'Z')
    			res++;
    
    	return res;
    }
}
