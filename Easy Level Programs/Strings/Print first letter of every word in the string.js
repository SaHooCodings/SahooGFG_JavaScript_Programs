class Solution{
    firstAlphabet(str){
        //code here
		let res = "";
	    if(str[0] != ' ')
	    	res += str[0];
	    for(let i = 0; i < str.length; i++){
	    	if(i != str.length - 1 && str[i] == ' ' && str[i + 1] != ' ')
	    		res += str[i + 1];
	    }
	    return res;
    }
}
