export class Node {
    constructor(value:any) {
        this.value = value;
        this.next = null;
    }
    value:any;
    next: Node | null;
}
export class Head extends Node{
    constructor() {
        super(0);
        this.count = 0;
        this.next = null;
    }
    count:number;
}


export class LinkedList {    

    // linkList:Node[] = [];
    head:Head = new Head();

   
    insert(head:Head, value:any) {
        const node = new Node(value);
        if (this.head.next === null) {//若链表为空尾结点即为头结点
          head.next = node;
        } else {
          let tem:Node = head.next!;
          while (tem.next != null) {//链表不为空则不断往后遍历
            tem = tem.next as Node;
          }
          tem.next = node;
        }
        this.head.count++;
    }

    headInsert(head:Head,value:any){
        const node = new Node(value);
        node.next = this.head.next;
        head.next =  node;
        head.count++;    
    }

    getElementAt(index:number):Node|null{
        if(index>=0&& index<this.head.count){
            let node:Node = this.head;
            for(let i=0;i<index&&node!=null&&node.next!==null;i++){
                node = node.next;
            }
            return node;
        }else{
            return null;
        }
    }

    removeAt(index:number):void{
        if(index>=0&&index<this.head.count){
            if(index === 0 && this.head.next){
                this.head = {...this.head.next,count:this.head.count};
            }else{
                let prev:Node = this.getElementAt(index-1) as Node;
                let current = prev.next;
                prev.next = current?current.next:null;
            }
        }else{
            return;
        }
    }


    public get count(): number {
        return this.head.count;
    }
    

}