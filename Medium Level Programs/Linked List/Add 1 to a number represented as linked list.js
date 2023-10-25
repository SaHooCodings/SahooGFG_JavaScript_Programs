class Solution {
    addOne(node)
    {
        //reverse the linked list
        let current = node;
        let prev = null;
        let next = null;
        
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        
        node = prev;
        
        //add one to the linked list
        let carry = 1;
        current = node;
        
        while (carry) {
            current.data += 1;
            
            if (current.data < 10) return this.reverse(node);
            
            current.data = 0;
            
            if (current.next == null) break;
            
            current = current.next;
        }
        
        current.next = new Node(1);
        
        return this.reverse(node);
    }
    
    reverse(node) {
        let current = node;
        let prev = null;
        let next = null;
        
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        
        node = prev;
        
        return node;
    }
}
