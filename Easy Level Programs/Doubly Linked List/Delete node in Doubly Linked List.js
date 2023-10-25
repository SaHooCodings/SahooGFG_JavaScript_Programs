class Solution
{
	deleteNode(head, x)
	{
		let del=head; 
		x--; 
		while(x-->0){ 
		    del=del.next; 
		}
		if(head == null || del == null)
			return null;
			
		if(head == del) 
		{             
			head = del.next;
		}
		
		if(del.next != null)
			del.next.prev = del.prev; 
			
		if(del.prev != null) 
			del.prev.next = del.next;
		
		return head;
	}
}
