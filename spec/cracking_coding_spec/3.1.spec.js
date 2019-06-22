var Solution = require('../../cracking_coding_interview_problems/stacks_queues/3.1/Solution');

describe('3.1 test suite', () => {
    var solution;
    beforeEach(() => {
        solution = new Solution();
    });

    it('should be able to push and peek three stacks', () => {
        solution.push('stack1', 'a1');
        solution.push('stack2', 'b1');
        solution.push('stack3', 'c1');

        solution.push('stack1', 'a2');
        solution.push('stack2', 'b2');
        solution.push('stack3', 'c2');

        solution.push('stack1', 'a3');
        solution.push('stack1', 'a4');
        solution.push('stack3', 'c3');

        expect(solution.peek('stack1')).toBe('a4');
        expect(solution.peek('stack2')).toBe('b2');
        expect(solution.peek('stack3')).toBe('c3');

    });


    it('should be able to push, pop and peek three stacks', () => {
        solution.push('stack1', 'a1');
        solution.push('stack2', 'b1');
        solution.push('stack3', 'c1');

        solution.push('stack1', 'a2');
        solution.push('stack2', 'b2');
        solution.push('stack3', 'c2');

        solution.push('stack1', 'a3');
        solution.push('stack1', 'a4');
        solution.push('stack3', 'c3');

        expect(solution.pop('stack3')).toBe('c3');
        expect(solution.pop('stack1')).toBe('a4');
        expect(solution.pop('stack2')).toBe('b2');

        expect(solution.peek('stack1')).toBe('a3');
        expect(solution.peek('stack2')).toBe('b1');
        expect(solution.peek('stack3')).toBe('c2');

    });
})