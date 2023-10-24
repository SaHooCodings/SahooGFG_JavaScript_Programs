class Solution
{
    public int firstElementKTime(int[] a, int n, int k) { 
        HashMap<Integer,Integer> hm = new HashMap<>();
        for(int i = 0;i < n;i++)
        {
            hm.put(a[i],hm.getOrDefault(a[i],0)+1);
            if(hm.containsKey(a[i])&&hm.get(a[i])==k)
            {
                return a[i];
            }
        }
        return -1;
    } 
}
