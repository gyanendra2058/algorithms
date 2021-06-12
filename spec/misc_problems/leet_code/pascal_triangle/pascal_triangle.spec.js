var Solution = require('../../../../misc_problems/leet_code/pascal_traingle/Solution');
describe('Pascal triangle', () => {
    it('scenario 1', () => {
        let solution = new Solution();
        expect(solution.getRow(4)).toEqual([1, 4, 6, 4, 1])
    })
})