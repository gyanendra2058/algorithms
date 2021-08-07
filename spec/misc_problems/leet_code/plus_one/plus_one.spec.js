var Solution = require('../../../../misc_problems/leet_code/plus_one/Solution');
describe('Plus one', () => {
    it('scenario 1', () => {
        let solution = new Solution();
        expect(solution.plusOne([1, 9, 6])).toEqual([1, 9, 7]);
    });

    it('scenario 2', () => {
        let solution = new Solution();
        expect(solution.plusOne([1, 9, 9])).toEqual([2, 0, 0]);
    });

    it('scenario 3', () => {
        let solution = new Solution();
        expect(solution.plusOne([9, 9, 9])).toEqual([1,0, 0, 0]);
    })
})