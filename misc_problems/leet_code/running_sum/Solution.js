class Solution {
    constructor() {

    }

    /**
 * @param {number[]} nums
 * @return {number[]}
 */
    runningSum(nums) {
        const runningSum = [];
        runningSum[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            runningSum[i] = runningSum[i - 1] + nums[i];
        }
        return runningSum;
    }
}

module.exports = Solution;
