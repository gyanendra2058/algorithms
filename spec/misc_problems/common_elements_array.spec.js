var Solution = require('../../misc_problems/common_elements_array/Solution');

describe('Common elements array', () => {
    it('postive scenario', () => {
        var solution = new Solution();
        expect(solution.commonElementsOfArrays([1, 5, 10, 20, 40, 80], [6, 7, 20, 80, 100], [3, 4, 15, 20, 30, 70, 80, 120])).toEqual([20, 80]);
    })
})
