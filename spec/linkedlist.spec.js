
var LinkedList = require('../linkedlist/LinkedList');
require('jasmine');

describe("Test suite", function () {
    describe("Test suite", function(){
        it("contains spec with an expectation", function () {
            var newLinkedList = new LinkedList(10);
            newLinkedList.addEnd(5);
            expect(newLinkedList.size).toEqual(2);
        });
    })
    
});