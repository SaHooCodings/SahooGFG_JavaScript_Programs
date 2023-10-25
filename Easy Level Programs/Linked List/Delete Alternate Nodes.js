class Solution {
  deleteAlt(head){
    if (head === null) {
      return;
    }
    let prev = head;
    let node = head.next;
    while (prev !== null && node !== null) {
      prev.next = node.next;
      node = null;
      prev = prev.next;
      if (prev !== null) {
        node = prev.next;
      }
    }
  }
}
