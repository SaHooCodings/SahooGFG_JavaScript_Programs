class Solution {
    //Function to reverse the linked list.
    reverse(head) 
    {
        let prev = null;
        let current = head;
        let next;
        
        while (current !== null) 
        { 
            next = current.next;   
            current.next = prev;    
            prev = current;           
            current = next;           
        }
        
        return prev; 
    }
    addTwoLists(first, second)
    {
        first = this.reverse(first);             
        second = this.reverse(second);
        
        let sum = null;
        let carry = 0;
        
        while( first !== null || second !== null || carry !== 0 )
        {
            let newVal = carry;
            if(first) newVal += first.data;
            if(second) newVal += second.data;

            carry = Math.floor(newVal/10); 
            newVal = newVal%10;    
            let newNode = new Node(newVal);
            newNode.next = sum;   
            sum = newNode;
            if(first) first = first.next;     
            if(second) second = second.next;
        }
        return sum;
    }
}
