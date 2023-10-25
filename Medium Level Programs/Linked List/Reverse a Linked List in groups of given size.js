class Solution {
    reverse(node, k) {
        let prev = null;
        let curr = node;
        let next = null;
        
        let count = 0;
        while (curr && count < k) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            count++;
        }
        if (next !== null) {
            node.next = this.reverse(next, k);
        }
        return prev;
    }
}
