var Solution = require('../../cracking_coding_interview_problems/arrays_strings/1.3/Solution');

describe('1.3 test suite', () => {
    it('should try to replace all spaces in a string with \'%20 \'', () => {
        let result = 'Mr%20John%20Smith';
        expect(new Solution().urlify('Mr John Smith  ')).toBe(result);
    })
})