class Solution {
    modularNode(head , k)
    {
        if (k <= 0 || head == null)
            return -1;
        
        let i = 1;
        let modularNode = null;
        
        for (let temp = head; temp != null; temp = temp.next) {
            if (i % k == 0) 
                modularNode = temp.data;
            
            i++;
        }
        
        if (modularNode == null)
            return -1;
        
        return modularNode;
    }
}
