class Solution {
    constructor() {

    }

    findSubArrayWithSum(array, sum) {
        let result = { found: false };
        let leftPointer =0;
        let rightPointer =0; 
        let startSum = 0;
        while (rightPointer <= array.length - 1 && leftPointer <= array.length - 1) {
            if (startSum < sum) {
                startSum += array[rightPointer]
                rightPointer++;
            } else if (startSum > sum) {
                startSum -= array[leftPointer];
                leftPointer++;
            }
            else {
                result.found = true;
                result.startIndex = leftPointer;
                result.endIndex = rightPointer;
                break;
            }
        }
        return result;
    }
}

module.exports = Solution;