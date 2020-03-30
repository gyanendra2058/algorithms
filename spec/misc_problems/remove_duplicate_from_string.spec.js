var Solution = require('../../misc_problems/remove_duplicate_strings/Solution');

describe('Should remove duplicates from string', () => {
    it('if duplicates are present', () => {
        const solution = new Solution();
        expect(solution.removeDups('This is is a test test string')).toBe('This is a test string')
    });
})
