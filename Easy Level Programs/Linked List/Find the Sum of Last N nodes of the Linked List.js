class Solution {
  sumOfLastN_Nodes(head,n){
    //code here
    if (n <= 0) return 0;
    let sum = 0, temp = 0;
    let ref_ptr = head, main_ptr = head;
    while (ref_ptr != null && n > 0) {
        sum += ref_ptr.data;
        ref_ptr = ref_ptr.next;
        n--;
    }
    while (ref_ptr != null) {
        temp += main_ptr.data;
        sum += ref_ptr.data;
        main_ptr = main_ptr.next;
        ref_ptr = ref_ptr.next;
    }
    return (sum - temp);
  }
}
