class Solution {
    //Function to rotate a linked list.
    rotate(head, k)
    {
        if (k == 0) return head;
        let walk = head;
        let prev;
        while( k-- && walk !== null )
        {
            prev = walk;
            walk = walk.next;
        }
        if(!walk) return head; 
        let newHead = walk;
        prev.next = null;
        while( walk.next )
            walk = walk.next;
        walk.next = head;
        return newHead;
    }
}
