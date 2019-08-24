class Solution {

    constructor() {

    }

    isStringRotated(string1, string2) {
        //string1=xy, string2=yx , s1s1 = xyxy
        return string1.concat(string1).includes(string2);
    }
}

module.exports = Solution;