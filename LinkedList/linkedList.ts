class ListNode<T> {
 next?: ListNode<T>;

 constructor(public value:T) {}
}

class linkedList<T> {
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0

    add(value: T) {
        const node = new ListNode(value);
        if(!this.root || !this.tail){
            this.root = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    getNumberOfElements(){
        return this.length;
    }

    print() {
        let current = this.root;
        while(current){
            console.log(current.value)
            current = current.next;

        }
    }
}

const numberlist = new linkedList<number>();

numberlist.add(5);
numberlist.add(10);
numberlist.add(15);

console.log(numberlist.getNumberOfElements())
numberlist.print();
console.log("----------------")
const stringlist = new linkedList<string>();

stringlist.add('ABC');
stringlist.add('rty');
stringlist.add('awe');

console.log(stringlist.getNumberOfElements())
stringlist.print();