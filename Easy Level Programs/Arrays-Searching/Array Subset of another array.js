class Solution{
    isSubset(a1, a2, n, m){
        let um = new Map();
        let um2 = new Map();

        for (let i = 0; i < n; i++) {
            if (um.has(a1[i])) {
                um.set(a1[i], um.get(a1[i]) + 1);
            } else {
                um.set(a1[i], 1);
            }
        }
        
        for (let i = 0; i < m; i++) {
            if (um2.has(a2[i])) {
                um2.set(a2[i], um2.get(a2[i]) + 1);
            } else {
                um2.set(a2[i], 1);
            }
        }

        let count = 0;
        for (let [key, value] of um2) {
            if (um.has(key) && um.get(key) >= value) {
                count += value;
            }
        }

        if (count == m) {
            return "Yes";
        } else {
            return "No";
        }
    }
}
