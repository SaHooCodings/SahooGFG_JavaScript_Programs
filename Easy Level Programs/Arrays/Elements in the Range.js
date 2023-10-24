class Solution{
    check_elements(arr, n, A, B){
        let range = B-A;
        for(let i=0;i<n;i++){
            if((Math.abs(arr[i]))>=A && (Math.abs(arr[i]))<=B){
                let z = Math.abs(arr[i])-A;
                if(z<n && arr[z]>0){
                    arr[z] = arr[z]*-1;
                }
            }
        }
        let count=0;
        for(let i=0;i<=range && i<n;i++){
            if(arr[i]>0){
                return false;
            } else {
                count++;
            }
        }
        if(count!==(range+1)){
            return false;
        }
        return true;
    }
}
