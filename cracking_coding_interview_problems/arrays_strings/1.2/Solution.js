var _ = require('lodash');

class Solution {
    constructor() {

    }
    /**
     * @param  {string} str1
     * @param  {string} str2
     * @returns {boolean} Result of the comparison
     */
    checkPermutation(str1, str2) {
        let charArrStr1 = [...str1];
        let charArrStr2 = [...str2];
        let mapObjChar1 = {};
        let mapObjChar2 = {};
        let result = true;

        if(charArrStr1.length !== charArrStr2.length) {
            return false;
        }

        charArrStr1.forEach((item) => {
            if (mapObjChar1[item]) {
                mapObjChar1[item]++;
            }
            mapObjChar1[item] = 1;
        });

        for (let i = 0; i < charArrStr2.length; i++) {
            if (!mapObjChar1[charArrStr2[i]]) {
                result = false;
            } else {
                if (mapObjChar2[charArrStr2[i]]) {
                    mapObjChar2[charArrStr2[i]]++;
                }
                mapObjChar2[charArrStr2[i]] = 1;
            }
        }

        if (!_.isEqual(mapObjChar1, mapObjChar2))
            result = false;

        return result;
    }
}

module.exports = Solution;