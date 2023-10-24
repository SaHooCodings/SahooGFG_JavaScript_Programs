class Solution {
    
    searchEle(a, x){
        for(let i=0; i<a.length; i++){
            if(a[i] === x)
                return true;
        }
        return false;
    }

    insertEle(a, y, yi){
        if(yi >= 10000)
            return false;
        a.splice(yi, 0, y);
        return true;
    }

    deleteEle(a, z){
        let index = a.indexOf(z);
        if (index !== -1){
            a.splice(index, 1);
        }
        return true;
    }
}
