class Solution {
  sortedInsert(head,x){ 
    let node=new Node(x); 
    let current = null; 
    if(head === null) 
      head = node;
         
    else if (head.data >= node.data) 
    {
      node.next = head;
      node.next.prev = node; 
      head = node;
     }
     else 
     {
      current = head; // Start from the head node.
      while (current.next !== null && current.next.data < node.data) 
        current = current.next;
      node.next = current.next;
         
      if (current.next !== null) 
        node.next.prev = node;
    
      current.next = node;
      node.prev = current;
     }
     return head;
  }
}
