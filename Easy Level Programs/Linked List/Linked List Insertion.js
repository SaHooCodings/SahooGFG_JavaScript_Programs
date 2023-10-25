class Solution {
    insertAtBegining(head, newData)
    {
        let temp = new Node(newData);
        
        if(head === null)
        {
            return temp;
        }
        temp.next = head;
        return temp;
    }
    insertAtEnd(head, newData)
    {
        let temp = new Node(newData);
        if(head === null){
           return temp;
        }
        else{
            let ptr = head;
            while(ptr.next !== null)
                ptr = ptr.next;
            ptr.next = temp;
        }
       return head;
    }
}
