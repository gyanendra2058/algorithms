var Solution = require('../../../../misc_problems/leet_code/two_sum/Solution');

describe('Two number', () => {
    it('scenario 1', () => {
        let solution = new Solution();
        expect(solution.twoSum([2, 7, 6, 8], 13)).toEqual([1,2]);
    });
})