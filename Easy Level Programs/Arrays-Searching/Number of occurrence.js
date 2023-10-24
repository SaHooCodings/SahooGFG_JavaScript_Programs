class Solution {
    
    count(arr,n,x){ 
        let cnt = 0;
        for(let it of arr){
            if(it == x) 
                cnt++; 
        }
        return cnt;
    }
}
