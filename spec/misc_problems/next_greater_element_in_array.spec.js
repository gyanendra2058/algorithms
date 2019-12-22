var Solution = require('../../misc_problems/next_greater_element_in_array/Solution');

describe('Find the next greated element when', function () {

    it('provided array elements are in mixed order', () => {
        let result1 = {
            50: -1,
            4: 5,
            5: 25,
            2: 25,
            25: -1
        };

        let result2 = {
            13: -1,
            7: 12,
            6: 12,
            12: -1
        }

        expect(new Solution().getNextGreaterElementInArray([50, 4, 5, 2, 25])).toEqual(result1);
        expect(new Solution().getNextGreaterElementInArray([13, 7, 6, 12])).toEqual(result2);

    });

    it('provided array elements are in increasing order', () => {
        expect(new Solution().getNextGreaterElementInArray([1, 2, 3, 4])).toEqual({ 1: 2, 2: 3, 3: 4, 4: -1 });
    });

    it('provided array elements are in decreasing order', () => {
        expect(new Solution().getNextGreaterElementInArray([4, 3, 2, 1])).toEqual({ 1: -1, 2: -1, 3: -1, 4: -1 });

    });

});
