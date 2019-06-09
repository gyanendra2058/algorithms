var Solution = require('../../cracking_coding_interview_problems/arrays_strings/1.2/Solution');

describe('1.2 test suite', () => {
    let solution
    beforeEach(() => {
        solution = new Solution();
    });

    it('should test non permutation input', () => {
        expect(solution.checkPermutation('abc', 'abd')).toEqual(false);
    })

    it('should test permutation input', () => {
        var solution = new Solution();
        expect(solution.checkPermutation('abc', 'cba')).toEqual(true);
    })

    it('should test permutation input with duplicate chars and unequal strings', () => {
        var solution = new Solution();
        expect(solution.checkPermutation('aabbc', 'cba')).toEqual(false);
    })

    it('should test permutation input with duplicate chars with equal strings', () => {
        var solution = new Solution();
        expect(solution.checkPermutation('aabbc', 'bbaac')).toEqual(true);
    })

    it('should test permutation input with duplicate chars with equal strings', () => {
        var solution = new Solution();
        expect(solution.checkPermutation('aabbc', 'dbaac')).toEqual(false);
    })
})