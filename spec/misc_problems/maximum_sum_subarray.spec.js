var Solution = require('../../misc_problems/maximum_sum_subarray_fixedsize/Solution');

describe('maximum sum sub array with size k', () => {

    it('positive scenario', () => {
        expect(new Solution().getSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
        expect(new Solution().getSubarray([100, 200, 300, 400], 2)).toBe(700)
    });

    it('negative scenario', () => {
        expect(new Solution().getSubarray([2, 3], 3)).toBe(-1);
    });
    
});
