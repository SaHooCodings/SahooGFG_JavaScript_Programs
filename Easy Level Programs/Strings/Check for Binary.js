class Solution{

    // Function to check if a given string is binary or not
    isBinary(str)
    {

        // Iterate through each character of the string
        for(let i=0;i<str.length;i++)
        {
            // If the character is not '0' or '1', return false
            if(str[i] !== '0' && str[i] !== '1')
                return false;
        }

        // If all characters are '0' or '1', return true
        return true;

    }

}
