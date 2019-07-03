class Solution {
    constructor() {
        this.count = 0;
    }

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

    // Solution to problem b.
    totalIntegers(mdArray) {
        
        for (let i = 0; i < mdArray.length; i++) {
            if (Array.isArray(mdArray[i])) {
                return this.totalIntegers(mdArray[i]);
            } else {
                this.count += Number.isInteger(mdArray[i]) ? 1 : 0;
            }
        }
        return this.count;
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
}

module.exports = Solution;