class Solution{
    sortIt(arr,n){
        let j = 0, k = 0;
        let even = [], odd = [];
    
        for (let i = 0; i < n; i++) {
            let num = arr[i];
            if (num % 2 !== 0)
                odd[j++] = num;
    
            else
                even[k++] = num;
        }
    
        even.sort((a, b) => a - b);
        odd.sort((a, b) => b - a);
    
        let c = 0;
        for (let i = 0; i < odd.length; i++) 
            arr[c++] = odd[i];
        for (let i = 0; i < even.length; i++) 
            arr[c++] = even[i];
    }
}
