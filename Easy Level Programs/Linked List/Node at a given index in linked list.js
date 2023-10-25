class Solution {
  GetNth(head,index){ 
    
    let x = 0; 
    index--; 
    while(x < index && head){ 
      x++ 
      head = head.next;
    }

    return head.data;
  }
}
