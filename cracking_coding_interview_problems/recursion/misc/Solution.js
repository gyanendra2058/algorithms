class Solution {
    constructor() {}

    // Solution to problem a.
    exponent(power, num) {
        if (power === 1) {
            return num;
        } else {
            return num * this.exponent(power - 1, num);
        }
    }

    // Solution to problem c.
    sumRange(num) {
        if (num === 1) {
            return 1;
        } else {
            return num + this.sumRange(num - 1);
        }
    }

    // Solution to problem d
    all(arr, cb) {
        if (arr.length === 1) {
            return cb(arr.shift());
        } else {
            arr.shift();
            return cb(arr.shift()) && this.all(arr, cb)
        }
    }

    productOfArray(arr) {
        if (arr.length === 1) {
            return arr[0];
        } else
            return arr.shift() * this.productOfArray(arr);
    }

    contains(nestedObj, value) {
        let keys = Object.keys(nestedObj);
        if (keys.length === 0) {
            return false;
        } else if (nestedObj[keys[0]] == value) {
            return true;
        } else {
            return this.contains(nestedObj[keys[0]], value);
        }
    }

    // Solution to problem b
    totalIntegers(mdArray) {
        if (Number.isInteger(mdArray)) {
            return 1;
        } else if (mdArray.length === 0 || (typeof mdArray === 'string')) {
            return 0;
        } else {
            return this.totalIntegers(mdArray.shift()) + this.totalIntegers(mdArray);
        }
    }

    // Solution to problem e
    sumSquares(mdArray) {
        if (Number.isInteger(mdArray)) {
            return mdArray * mdArray;
        } else if (mdArray.length === 0) {
            return 0;
        } else {
            return this.sumSquares(mdArray.shift()) + this.sumSquares(mdArray);
        }
    }

    // Solution to problem f
    replicate(times, number) {
        if (times <= 0) {
            return [];
        } else {
            return this.replicate(times - 1, number).concat(number);
        }
    }

    // Solution to flatten array
    flattenArray(array) {
        if(!Array.isArray(array)) {
            return [array];
        } else if(array.length === 0) {
            return [];
        } else {
            let firstElement = this.flattenArray(array.shift());
            let remainingArray = this.flattenArray(array);
            return firstElement.concat(remainingArray);
        }
    }
}

module.exports = Solution;