class Solution{
    common_element(v1,v2){
        //code here
        let m1 = new Map()
        let m2 = new Map()
        let m3 = new Map()
        
        for(let i of v1)
        {
            if(!m1.has(i))
            {
                m1.set(i,1)
            }
            else
            {
                m1.set(i,m1.get(i)+1)
            }
        }
        for(let i of v2)
        {
            if(!m2.has(i))
            {
                m2.set(i,1)
            }
            else
            {
                m2.set(i,m2.get(i)+1)
            }
        }
        for(let [key, value] of m1.entries())
        {
            if(m2.has(key))
            {
               m3.set(key, Math.min(value, m2.get(key))) 
            }
        }
        let ans = []
        for(let [key, value] of m3.entries())
        {
            for(let i = 0;i < value;i++)
            {
                ans.push(key)
            }
        }
        ans.sort((a,b) => a-b)
        return ans
    }
}
