class Solution{
    modify(s){
        let n = s.length ;
        let i = 0, itr = 0;
        let arr = s.split('');
    
        while (i < n)
        {
            if (arr[i] != " ") 
            {
              arr[itr++] = arr[i];
            }
            i++;
        }
        return arr.slice(0, itr).join('');
    }
}
