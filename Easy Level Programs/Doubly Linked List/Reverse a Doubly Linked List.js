class Solution {
  reverseDLL(head) { 
    if (head === null || head.next === null) 
      return head;

    let curr = head, prev = null; 

    while (curr !== null) {
      prev = curr.prev;
      curr.prev = curr.next;
      curr.next = prev;

      curr = curr.prev;
    }
    return prev.prev;
  }
}
