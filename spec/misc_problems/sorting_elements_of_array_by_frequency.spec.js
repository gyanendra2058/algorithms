var Solution = require('../../misc_problems/sorting_elements_of_array_ by_frequency/Solution');

describe('it should sort the array by frequency', () => {
    it('scenario 1', () => {
        expect(new Solution().sortByFrequency([5, 5, 4, 6, 4, 5])).toEqual([5,5,5,4,4,6])
    })
})