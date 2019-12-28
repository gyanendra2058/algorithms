class Solution {
    constructor() {

    }

    getSubarray(array, size) {
        if(array.length < size) {
            return -1;
        }

        let maxSum = 0;
        let leftPtr = 0;
        let rightPtr = size - 1;
        // Start with a fixed size window and initial max sum
        for (let i = leftPtr; i <= rightPtr; i++) {
            maxSum += array[i];
        }

        // Slide the window and look for the sum
        for (let j = rightPtr + 1; j < array.length; j++) {
            let tempSum = maxSum - array[leftPtr] + array[j];
            leftPtr++;
            if (tempSum > maxSum) {
                maxSum = tempSum; 
            }
        }

        return maxSum;
    }
}

module.exports = Solution;