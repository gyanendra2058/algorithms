var Solution = require('../../misc_problems/subarray_with_given_sum/Solution');

describe('it should test if the subarray exits', () => {
    it('positive scenario', () => {
        var solution = new Solution();
        expect(solution.findSubArrayWithSum([1,2,3,4,5,6], 7).found).toBe(true);
        expect(solution.findSubArrayWithSum([1,2,3,4,5,6], 7).startIndex).toBe(2);
        expect(solution.findSubArrayWithSum([1,2,3,4,5,6], 9).endIndex).toBe(3);
        expect(solution.findSubArrayWithSum([1,2,3,4,5,6], 8).found).toBe(false);
    })
})