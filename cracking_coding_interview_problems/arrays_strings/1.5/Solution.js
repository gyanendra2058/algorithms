class Solution {
    constructor() {

    }

    isOneAway(ipString1, ipString2) {
        let largerString = ipString1;
        let smallerString = ipString2;
        let editOp = 'remove';

        if (ipString1.length < ipString2.length) {
            largerString = ipString2;
            smallerString = ipString1;
        } else if (ipString1.length == ipString2.length) {
            editOp = 'replace';
        }

        let largerStringCharArray = [...largerString];
        let smallerStringCharArray = [...smallerString];
        let editIndex = -1;
        let replaceChar = '';

        for (let i = 0; i < largerStringCharArray.length; i++) {
            if (largerStringCharArray[i] !== smallerStringCharArray[i]) {
                editIndex = i;
                replaceChar = smallerStringCharArray[i];
                break;
            }
        }

        if (editIndex === -1 || smallerString === this._performEdit(largerString, {
                editOp,
                editIndex,
                replaceChar
            })) {
            //Strings are equal or after one edit
            return true;
        } else {
            return false;
        }

    }

    _performEdit(str, editArg) {
        if (editArg.editOp == 'remove') {
            return this._spliceSlice(str, editArg.editIndex, 1);
        } else {
            // do the replace
            return str.substring(0, editArg.editIndex) + editArg.replaceChar + str.substring(editArg.editIndex + 1);
        }
    }

    _spliceSlice(str, index, count, add) {
        // We cannot pass negative indexes directly to the 2nd slicing operation.
        if (index < 0) {
            index = str.length + index;
            if (index < 0) {
                index = 0;
            }
        }
        return str.slice(0, index) + (add || "") + str.slice(index + count);
    }

}

module.exports = Solution;