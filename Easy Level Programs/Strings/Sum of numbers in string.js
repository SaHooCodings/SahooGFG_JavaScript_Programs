class Solution 
{
    isdigit(ch)
    {
        let x = ch.charCodeAt(0);
        if(x>=48&&x<=57)
        return true;
        return false;
    }
    
    //Function to calculate sum of all numbers present in a string.
    findSum(str)
    {
    	let temp = "";
    	let sum = 0;
    
    	//iterating over the string.
    	for (let i=0;i<str.length;i++)
    	{
    	    let ch = str[i];
    	    
    		//if current character is digit, we store it in a temporary string.
    		if (this.isdigit(ch))
    			temp += ch;
    
    		else
    		{
    			//incrementing final sum by number stored in temporary string.
    			if(temp.length>0)
    			sum += parseInt(temp);
                //making the temporary string empty again.
    			temp = "";
    		}
    	}
    	
        //adding any number if it's present in temporary
    	//string to final sum and returning it.
    	if(temp.length>0)
    	    sum += parseInt(temp);
    	return sum;
    }
}
