var Solution = require('../../cracking_coding_interview_problems/arrays_strings/1.9/Solution');
describe('1.8 spec test', () => {
    it('should test if string is rotated', () => {
        var solution = new Solution();
        expect(solution.isStringRotated('waterbottlery', 'bottlerywater')).toBe(true);
        expect(solution.isStringRotated('waterbottlery', 'asdadad')).toBe(false)
    })
})