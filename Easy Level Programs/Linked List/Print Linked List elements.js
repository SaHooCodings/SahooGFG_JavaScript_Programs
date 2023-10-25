class Solution {
    display(head) {
        let s = "";
        while (head) {
            s += head.data;
            s += " "; 
            head = head.next;
        }
        console.log(s); 
    }
}
