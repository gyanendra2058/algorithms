var LLNode = require('./LLNode');

class LinkedList {

    constructor(headValue) {
        this.head = new LLNode(headValue);
        this.size = 1;
    }

    addEnd(llNodeValue) {
        let currentPointer = this.head.next;
        if(currentPointer=== undefined){
            this.head.next = new LLNode(llNodeValue);
            this.size++;
        } else {
            while(this.head.next !== undefined){
                addEnd(this.head.next);
            }
        }
    }

    addStart(llNode){

    }

    delete(nodeValue){

    }

    printItems(){
        while(this.head !== undefined){
            this.head.toString();
            this.head = this.head.next;
        }
    }
}
module.exports = LinkedList;