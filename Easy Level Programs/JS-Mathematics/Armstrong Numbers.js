class Solution{
    armstrongNumber(n){
        let sum = 0;
        let temp = n;
        while(temp){
            let last_dig = temp % 10;
            temp = Math.floor(temp / 10);
            sum += Math.pow(last_dig, 3);
        }
        if(sum == n){
            return "Yes";
        }else{
            return "No";
        }
    }
}
