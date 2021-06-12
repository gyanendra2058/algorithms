class Solution {
    constructor() { }

    getRow(rowIndex) {
        if (rowIndex === 0) {
            return [1];
        } else if (rowIndex === 1) {
            return [1, 1]
        } else {
            const tempArray = [...Array(rowIndex +1)].map(x => 0);
            tempArray[0] = 1;
            tempArray[rowIndex] = 1;
            for(let i = 1; i<= rowIndex -1 ; i++) {
                tempArray[i] = this.getRow(rowIndex - 1)[i - 1] + this.getRow(rowIndex - 1)[i];
            }
            return tempArray;
        }
    };
}

module.exports = Solution;