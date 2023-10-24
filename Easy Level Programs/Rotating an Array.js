class Solution{
    leftRotate(arr, n, d) {
        if (d === 0) return;
        this.reverseArray(arr, 0, d - 1);
        this.reverseArray(arr, d, n - 1);
        this.reverseArray(arr, 0, n - 1);
    }

    reverseArray(arr, start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}
