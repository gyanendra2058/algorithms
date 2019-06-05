
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
        });

        it("should be able to add few elements", function () {
            console.log(newLinkedList)
            expect(newLinkedList.size).toEqual(4);
        });

        // it("should be able to print 3 added elements", function () {
        //     spyOn(newLinkedList.head, 'toString');
        //     newLinkedList.printItems();
        //     expect(newLinkedList.head.toString).toHaveBeenCalledTimes(1);
        // });
         
    })
    
});