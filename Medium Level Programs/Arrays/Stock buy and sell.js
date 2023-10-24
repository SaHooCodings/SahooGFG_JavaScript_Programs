class Interval {
    constructor(buy, sell){
        this.buy = buy;
        this.sell = sell;
    }
}

class Solution {
    //Function to find the days of buying and selling stock for max profit.
    stockBuySell(A, n)
    {
        let result = [];
      //Prices must be given for at least two days else return the empty result.
        if (n == 1)    
            return result;
     
        let count = 0;
     
        //Creating solution vector.
        let sol = [];
        for(let i=0; i<Math.floor(n/2)+1; i++){
            sol.push(new Interval(0, 0));
        }
     
        let i = 0;
        //Traversing through given price array.
        while (i < n-1)
        {
            //Finding Local Minima. Note that the limit of loop is (n-2)
            //as we are comparing present element to the next element.
            while ((i < n-1) && (A[i+1] <= A[i]))
                i++;
     
            //If we reach the end, we break the loop as no further 
            //solution is possible.
            if (i == n-1)
                break;
     
            //Storing the index of minima which gives the day of buying stock.
            sol[count].buy = i++;
     
            //Finding Local Maxima. Note that the limit of loop is (n-1)
            //as we are comparing present element to previous element.
            while ((i < n) && (A[i] >= A[i-1]))
                i++;
     
            //Storing the index of maxima which gives the day of selling stock.
            sol[count].sell = i-1;
     
            //Incrementing count of buy/sell pairs.
            count++;
        }
        
        if (count == 0)
            return result;
        else
        {
            //Storing the buy/sell pairs in a list.
            for (let i = 0; i < count; i++){
                let temp = [];
                temp.push(sol[i].buy);
                temp.push(sol[i].sell);
                result.push(temp);
            }

        }
        //returning the result.
        return result;
    }
}
