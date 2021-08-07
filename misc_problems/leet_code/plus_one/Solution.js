class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    constructor() {
        
    }
    plusOne(digits) {
        // Go in reverse order
        let i;
        for (i = digits.length - 1; i >= 0; i--) {
            let currentDigit = digits[i];
            if (currentDigit !== 9) {
                digits[i] = currentDigit + 1;
                break;
            } else { // last digit == 9
                digits[i] = 0;
            }
        }

        if (i == -1) {
            return [1, ...digits];
        } else {
            return digits;
        }
    }
}
 module.exports = Solution;