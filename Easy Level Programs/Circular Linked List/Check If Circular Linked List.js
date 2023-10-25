class Solution {
    isCircular(head) { 
        if (head === null) return false;
        let ptr = head.next; 
        while (ptr) { 
            if (ptr === head) return true;
            ptr = ptr.next;
        }
        return false;
    }
}
