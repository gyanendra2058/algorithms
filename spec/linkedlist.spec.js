
var LinkedList = require('../linkedlist/LinkedList');
var LLNode = require('../linkedlist/LLNode');

describe("Linklist test suite", function () {
    
    describe("Add behaviour ", function(){
        var newLinkedList;

        beforeEach(function() {
            newLinkedList = new LinkedList(10);
            newLinkedList.addEnd(5);
            newLinkedList.addEnd(15);
            newLinkedList.addEnd(25);
            newLinkedList.addEnd(35);
        });

        it("should be able to add few elements", function () {
            expect(newLinkedList.head.value).toEqual(10);
            expect(newLinkedList.tail.value).toEqual(35);

        });

        it("should be able to print added elements", function () {
            var results = newLinkedList.toStringFormatted();
            expect(results).toBe('10-5-15-25-35-null');
        });
         
    })
    
});