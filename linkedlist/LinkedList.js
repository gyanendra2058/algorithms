var LLNode = require('./LLNode');

class LinkedList {

    constructor(headValue) {
        this.head = new LLNode(headValue);
        this.tail = this.head;
    }

    addEnd(llNodeValue) {
        let currentPointer = this.head;
        let nodeAdded = new LLNode(llNodeValue);

        while (currentPointer.next !== undefined) {
            currentPointer = currentPointer.next;
        }
        currentPointer.next = nodeAdded;
        this.tail = nodeAdded;
    }

    toStringFormatted() {
        let llString = '';
        let cp = this.head;
        while (cp.next !== undefined) {
            llString = llString.concat(cp.value, '-');
            cp = cp.next;
        }

        llString = llString.concat(this.tail.value, '-null');
        return llString.trim();
    }
}
module.exports = LinkedList;