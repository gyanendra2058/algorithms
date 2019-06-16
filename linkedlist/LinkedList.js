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

    /**
     * CCIP 2.1 Solution
     */
    deleteDuplicates() {
        let traversalMap = new Map();
        let currPtr = this.head.next;
        let prevPtr = this.head;
        traversalMap.set(prevPtr.value, 1);

        while (currPtr !== undefined) {
            if (!traversalMap.has(currPtr.value)) {
                traversalMap.set(currPtr.value, 1);
                prevPtr = prevPtr.next;
            } else {
                if (currPtr.next) {
                    prevPtr.next = currPtr.next;
                } else {
                    // Check if tail is redundant and remove it
                    if (traversalMap.has(currPtr.value)) {
                        prevPtr.next = undefined;
                        this.tail = prevPtr;
                    } else {
                        this.tail = currPtr;
                    }
                }
            }
            currPtr = currPtr.next;
        }
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