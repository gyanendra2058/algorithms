var Solution = require('../../../../misc_problems/leet_code/running_sum/Solution');

describe('Running sum', () => {
    it('scenario 1', () => {
        let solution = new Solution();
        expect(solution.runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
    });
})