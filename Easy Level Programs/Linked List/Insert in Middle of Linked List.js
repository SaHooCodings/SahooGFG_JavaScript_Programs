class Solution {
    insertInMiddle(head, x)
    {
        if (head === null)
            return (new Node(x));
    	else{
    	    //creating new node.
    		let newNode = new Node(x); 
    		let slow = head;
    		let fast = head.next;
    		while (fast && fast.next) {  
    			slow = slow.next;         
    			fast = fast.next.next; 
    		}
    		newNode.next = slow.next;
    		slow.next = newNode;
    		
    	   return head;
        }
   }
}
