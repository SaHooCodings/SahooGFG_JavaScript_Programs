class Solution {
    chocolates(arr,n){
        let i = 0;
        let j = n-1;
        
        while(i < j && n > 1){
            if(arr[i] > arr[j])
                i++;
            else
                j--;
            n--;
        }
        return arr[i];
    }
}
