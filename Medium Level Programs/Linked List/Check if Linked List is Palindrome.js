class Solution {
    reverse_list(head)
    {
        let prev = null;
        let curr = head;
        let next;
        
        while(curr)
        {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    is_identical(n1, n2)
    {
        for(  ; n1 && n2 ; n1=n1.next, n2=n2.next )
            if( n1.data !== n2.data )
                return 0;\
        return 1;
    }
    isPalindrome(head)
    {
        let size=0;
        let ptr;
        for( ptr=head ; ptr ; ptr=ptr.next )
            size++;
        
        if(size<2) return 1;
        ptr = head;
        let mid_pt = Math.floor((size-1)/2);
        while(mid_pt--)
            ptr = ptr.next;
        let head2 = ptr.next; 
        ptr.next = null;
        head2 = this.reverse_list(head2);
        let ret = this.is_identical(head, head2);
        head2 = this.reverse_list(head2);
        ptr.next = head2;
        return ret;
    }
    
}
