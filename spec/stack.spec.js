var Stack = require('../stack/Stack');
var stack;
describe('Stack test suite', () => {
    beforeEach(() => {
        stack = new Stack();
    })

    it('should push items properly', () => {
        stack.push('one');
        stack.push('two');
        expect(stack.peek()).toEqual('two');
    });
})