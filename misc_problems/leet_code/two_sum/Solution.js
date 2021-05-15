class Solution {
    constructor() {

    }

    twoSum(nums, target) {
        //[2,7,6,8]
        let result = [];
        let indexValueMap = new Map();
        // Convert Array into map {2:0, 7:1, 6:2, 8:3}
        for (let i = 0; i < nums.length; i++) {
            indexValueMap.set(nums[i], i);
        }

        for (let [key, value] of indexValueMap) {
            const operand1Key = key;
            const operand2Key = target - key;
            if (operand1Key !== operand2Key) {
                result.push(value, indexValueMap.get(target - key));
                break;
            }
        }
        return result;
    }
}

module.exports = Solution;