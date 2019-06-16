var LinkedList = require('../linkedlist/LinkedList');
let newLinkedList;

describe("Linklist test suite", function () {
    describe("Add behaviour ", function () {
        beforeEach(function () {
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

    });
 
    describe('Delete behaviour', () => {
        let deleteDupsCaseLL;
        beforeEach(() => {
            deleteDupsCaseLL = new LinkedList(1);
            deleteDupsCaseLL.addEnd(2);
            deleteDupsCaseLL.addEnd(3);
            deleteDupsCaseLL.addEnd(4);
            deleteDupsCaseLL.addEnd(5);
        })

        it('should not delete any element if no duplicate elements are present', () => {
            deleteDupsCaseLL.deleteDuplicates();
            var results = deleteDupsCaseLL.toStringFormatted();
            expect(results).toBe('1-2-3-4-5-null');
        });

        it('should delete element if duplicate elements are present', () => {
            deleteDupsCaseLL.addEnd(2);
            deleteDupsCaseLL.addEnd(7);
            deleteDupsCaseLL.deleteDuplicates();
            var results = deleteDupsCaseLL.toStringFormatted();
            expect(results).toBe('1-2-3-4-5-7-null');
        });

        it('should delete element if many duplicate elements are present', () => {
            deleteDupsCaseLL.addEnd(15);
            deleteDupsCaseLL.addEnd(12);
            deleteDupsCaseLL.addEnd(5);
            deleteDupsCaseLL.addEnd(15);
            deleteDupsCaseLL.addEnd(13);
            deleteDupsCaseLL.addEnd(14);
            deleteDupsCaseLL.addEnd(13);
            deleteDupsCaseLL.addEnd(5);

            deleteDupsCaseLL.addEnd(1);
            deleteDupsCaseLL.addEnd(1);
            deleteDupsCaseLL.addEnd(2);
            deleteDupsCaseLL.addEnd(7);

            deleteDupsCaseLL.deleteDuplicates();
            var results = deleteDupsCaseLL.toStringFormatted();
            expect(results).toBe('1-2-3-4-5-15-12-13-14-7-null');
        });

        it('should delete element if redundant tail', () => {
            deleteDupsCaseLL.addEnd(15);
            deleteDupsCaseLL.addEnd(12);
            deleteDupsCaseLL.addEnd(1);
            deleteDupsCaseLL.addEnd(1);
            deleteDupsCaseLL.addEnd(2);

            deleteDupsCaseLL.deleteDuplicates();
            var results = deleteDupsCaseLL.toStringFormatted();
            expect(results).toBe('1-2-3-4-5-15-12-null');
        })
    });

});