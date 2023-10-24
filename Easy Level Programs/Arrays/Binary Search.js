class Solution {
    bin_search(arr, left, right, k) {
        if (left > right) return -1;
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == k) return mid;
        if (arr[mid] > k) 
          return this.bin_search(arr, left, mid - 1, k);
        else
          return this.bin_search(arr, mid + 1, right, k);
    }
    binarysearch(arr, n, k) { 
        return this.bin_search(arr, 0, n - 1, k); 
    }
}
