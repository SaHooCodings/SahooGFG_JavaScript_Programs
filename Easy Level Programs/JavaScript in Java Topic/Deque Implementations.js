/*
class Deque{
    constructor(){
        this.arr = [];
        this.size = 0;
    }
}
*/

class Solution {

    /**
     * @param {Deque} dq
     * @param {number} x
    */
    // Function to push element x to the back of the deque.
    push_back_pb(dq, x) {
        dq.arr.push(x);
        dq.size++;
    }

    /**
     * @param {Deque} dq
    */
    // Function to pop element from back of the deque.
    pop_back_ppb(dq) {
        if (dq.size > 0) {
            dq.arr.pop();
            dq.size--;
        }
    }

    /**
     * @param {Deque} dq
     * @returns {number}
    */
    // Function to return element from front of the deque.
    front_dq(dq) {
        if (dq.size > 0) {
            return dq.arr[0];
        }
        return -1;
    }

    /**
     * @param {Deque} dq
     * @param {number} x
    */
    // Function to push element x to the front of the deque.
    push_front_pf(dq, x) {
        dq.arr.unshift(x);
        dq.size++;
    }
}
