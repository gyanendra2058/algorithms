var Solution = require('../../cracking_coding_interview_problems/arrays_strings/1.1/Solution');

describe('1.1 test suite', () => {
    it('shoud return false for non unique string', () => {
        var solutionObj = new Solution();
        expect(solutionObj.isUnique('abac')).toEqual(false);
    });

    it('shoud return true for unique string', () => {
        var solutionObj = new Solution();
        expect(solutionObj.isUnique('abcde')).toEqual(true);
    });
})