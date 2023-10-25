class Solution {
    levelOrder(node)
    {
        let res = [];
        if (node === null) 
        return res;
        
        let q = [];
        let start_q = 0;
        q.push(node);
    
        while (q.length !== start_q)
        {
            let node1 = q[start_q]
            res.push(node1.data);
            start_q++;
            if (node1.left !== null)
                q.push(node1.left);
            if (node1.right !== null)
                q.push(node1.right);
        }
        //returning the list.
        return res;
    }
}
