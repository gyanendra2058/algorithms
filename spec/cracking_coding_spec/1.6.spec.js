var Solution = require('../../cracking_coding_interview_problems/arrays_strings/1.6/Solution');

describe('1.6 test suite', () => {
    it('should test compress a string positive scenario1', () => {
        expect(new Solution().compressString('aabcccccaaa')).toBe('a2b1c5a3');
    });

    it('should test compress a string positive scenario2', () => {
        expect(new Solution().compressString('abcccccaa')).toBe('a1b1c5a2');
    });

    it('should test compress a string negative scenario', () => {
        expect(new Solution().compressString('abcd')).toBe('abcd');
    });
});