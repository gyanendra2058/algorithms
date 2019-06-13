'use strict';

class Solution {

    compressString(str) {
        let compressedString = "";
        let compressedStringArray = [...str];
        let traversalMap = new Map();

        // Base condition to start
        compressedString = compressedString + compressedStringArray[0];
        traversalMap.set(compressedStringArray[0], 1);

        for (let i = 1; i < compressedStringArray.length; i++) {
            if (compressedStringArray[i] === compressedStringArray[i - 1]) {
                let occurence = traversalMap.get(compressedStringArray[i]);
                traversalMap.set(compressedStringArray[i], occurence + 1);
            } else {
                let currentOccurence = traversalMap.get(compressedStringArray[i - 1]);
                compressedString = compressedString + currentOccurence + compressedStringArray[i];
                // Clear the map and set the new key, val for current element
                traversalMap.delete(compressedStringArray[i - 1]);
                traversalMap.set(compressedStringArray[i], 1);
            }
        }

        compressedString = compressedString + traversalMap.get(compressedStringArray[compressedStringArray.length - 1]);

        if (compressedString.length >= str.length) {
            return str;
        } else {
            return compressedString;
        }
    }
}

module.exports = Solution;