class Solution {
    sortedMerge(head1, head2)
    {
        let dummy = new Node(0); 
        let tail = dummy;  
    
        while (1) {  
            if (head1 === null) {  
                tail.next = head2;  
                break;  
            }  
            else if (head2 === null) {  
                tail.next = head1;  
                break;  
            }
            if (head1.data <= head2.data){
                tail.next = head1;
                head1 = head1.next;
            }
            else{
                tail.next = head2;
                head2 = head2.next;
            }
            tail = tail.next;  
        } 
        return dummy.next;  
    }
}  
