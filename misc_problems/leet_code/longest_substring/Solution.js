class Solution {
    constructor() {

    }

    lengthOfLongestSubstring(s) {
        let leftPointer = 0;
        let rightPointer = 0;
        let tempSet = new Set();
        let strCharArr = Array.from(s);
        let maxLength = 0;
        for(let i = 0; i< strCharArr.length; i++) {
            if(!tempSet.has(strCharArr[i])) {
                tempSet.add(strCharArr[i]);
                rightPointer = i;
            } else {
                // a.Calculate the new max length via the tempSet ;
                // b. Bring the left pointer and right pointer to current index;
                // c. Start a new window with the strCharArr[i] as first element;

                //a
                if(maxLength < tempSet.size) {
                    maxLength = tempSet.size;
                }
                
                //b
                leftPointer = i;
                rightPointer = i;

                //c
                tempSet.clear();
                tempSet.add(strCharArr[i])
            }
        }
        return maxLength;
    }

}

module.exports = Solution;