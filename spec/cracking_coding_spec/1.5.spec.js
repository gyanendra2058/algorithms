var Solution = require('../../cracking_coding_interview_problems/arrays_strings/1.5/Solution');

describe('1.5 test suite', () => {
    describe ('should try to do one away edit, positive cases: ', () => {
        it('scenario 1', () => {
            expect(new Solution().isOneAway('pale', 'ple')).toBe(true);
        })

        it('scenario 2', () => {
            expect(new Solution().isOneAway('pales', 'pale')).toBe(true);
        })

        it('scenario 3', () => {
            expect(new Solution().isOneAway('pale', 'bale')).toBe(true);
        })
    })

    describe('should try to do one away edit, negative cases:', () => {
        it('scenario 1', () => {
            expect(new Solution().isOneAway('pale', 'bake')).toBe(false);
        })
    })
})