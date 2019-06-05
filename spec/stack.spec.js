var Stack = require('../stack/Stack');
var stack;
describe('Stack test suite', () => {
    beforeEach(() => {
        stack = new Stack();
    })

    it('should push items', () => {
        stack.push('one');
        stack.push('two');
        expect(stack.peek()).toEqual('two');
    });

    it('should pop items', () => {
        stack.push('one');
        stack.push('two');
        stack.push('three');
        stack.pop();
        expect(stack.peek()).toEqual('two');
    });

    it('should return undefined on popping empty stack', () => {
        stack.pop();
        expect(stack.peek()).toBeUndefined();
    });
})