var LLNode = require('./LLNode');

class LinkedList {

    constructor(headValue) {
        this.head = new LLNode(headValue);
        this.size = 1;
    }

    addEnd(llNodeValue) {
        let currentPointer = this.head;
        while (currentPointer.next != undefined) {
            currentPointer = currentPointer.next;
        }
        let nodeAdded = new LLNode(llNodeValue);
        currentPointer.next = nodeAdded;
        this.size++;
    }

    addStart(llNode) {

    }

    delete(nodeValue) {

    }

    printItems() {
        let cp = this.head;
        while (cp.next != undefined) {
            cp.toString();
            cp = cp.next;
        }
    }
}
module.exports = LinkedList;