class MyStack
{
    constructor(){
        this.top = null;
    }
    
    push(a)
    {
        if (this.top === null) {
            this.top = new StackNode(a);
        } 
        else 
        {
            //creating a new temp node in the stack    
            let temp = new StackNode(a);
            //assigning link part of new node to top and making it top node.
            temp.next = this.top;
            this.top = temp;
        }
    }
    pop()
    {
        let temp = this.top;
        if (temp === null) 
        {
            return -1;
        } 
        else 
        {
            temp = temp.next;
            let r = this.top.data;
            this.top = null;
            this.top = temp;
            
            //returning the data.
            return r;
        }
    }
}
