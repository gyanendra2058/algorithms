var Solution = require('../../misc_problems/search_element_rotated_sorted_array/Solution');

describe('Search element rotated array:' , () => {
    it('findPivotIdx case', () => {
        let arr = [30, 40, 50, 10, 20];
        let arr2 = [20, 21, 1, 2, 3,4,5];

        var tc1 = new Solution(arr);
        var tc2 = new Solution(arr2);
        expect(tc1.findPivotIdx()).toBe(2);
        expect(tc2.findPivotIdx()).toBe(1);

    });

    it('peak element case', () => {
        let arr = [6,7,8,9,5,4,3,2,1];
        let arr2 = [1,2,3,4];
        let arr3 = [90,80,70,60,50];

        var tc1 = new Solution(arr);
        var tc2 = new Solution(arr2);
        var tc3 = new Solution(arr3);

        expect(tc1.findPeakPoint()).toBe(3);
        expect(tc2.findPeakPoint()).toBe(3);
        expect(tc3.findPeakPoint()).toBe(0)

    });

    it('binary search sorted array scenario', () => {
        let arr = [0,2,3,4,5,6,7,8,9];
        let arr1 = [0,12,33,44,55,56,75,81,99,166];
        var tc1 = new Solution(arr);
        var tc2 = new Solution(arr1);
        expect(tc1.binarySearch(8)).toBe(7);
        expect(tc1.binarySearch(2)).toBe(1);
        expect(tc1.binarySearch(1)).toBeLessThan(0);
        expect(tc2.binarySearch(12)).toBe(1);
    });


    it('binary search rotated array scenario', () => {
        let arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
        let arr2 = [30, 40, 50, 10, 20];

        var tc1 = new Solution(arr);
        var tc2 = new Solution(arr2);
        expect(tc1.binarySearch2(3)).toBe(8);
        expect(tc1.binarySearch2(30)).toBeLessThan(0);
        expect(tc2.binarySearch2(10)).toBe(3)
    })
})