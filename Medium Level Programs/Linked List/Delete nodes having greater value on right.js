class Solution {
    
    compute(head)
    {
        let cur = head;
        let prev = null;
        let next;

        while(cur!=null)
        {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }

        head = prev;
        let current = head;

        let maxNode = head;
        let temp;

         while (current != null && current.next != null)
         {
             if(current.next.data < maxNode.data)
             {
                 temp = current.next;
                 current.next = temp.next;
                 temp = null;
             }
             else
             {
                 current = current.next;
                 maxNode= current;
             }
         }
         cur = head;
         prev = null;
         next;
         while(cur!=null)
         {
             next = cur.next;
             cur.next = prev;
             prev = cur;
             cur = next;
         }
         head = prev;
        return head;
    }
}
