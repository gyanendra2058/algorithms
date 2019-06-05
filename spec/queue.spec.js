var Queue = require('../queue/Queue');
var testQueue;

describe('Queue test suite', () => {
    beforeEach(()=>{
        testQueue = new Queue();
    });

    it('should queue elements' , () => {
        testQueue.enqueue('one');
        testQueue.enqueue('two');
        testQueue.enqueue('three');
        testQueue.enqueue('four');
        expect(testQueue.peek()).toBe('one');
    });

    it('should dequeue elements' , () => {
        testQueue.enqueue('one');
        testQueue.enqueue('two');
        testQueue.enqueue('three');
        testQueue.enqueue('four');
        testQueue.dequeue()
        expect(testQueue.peek()).toBe('two');
        testQueue.enqueue('five');
        testQueue.dequeue();
        expect(testQueue.peek()).toBe('three');
    })
})
