class Solution {

    constructor(num, precision) {
        this.num = num;
        this.precision = precision;
    }

    sqrt() {
        if (isNaN(this.num) || this.num < 0) {
            throw new Error('Invalid input');
        }

        let integerPart = this._getIntegerPart();
        if (integerPart * integerPart === this.num) // Perfect integer square scenario
            return integerPart;
        else {
            let tempSqrt = integerPart;

            for (let i = 1; i <= this.precision; i++) {
                inner:
                for (let j = 0; j < 9; j++) {

                    let low = Number(tempSqrt + j / Math.pow(10, i));
                    let high = Number(tempSqrt + (j + 1) / Math.pow(10, i));
                    if (low * low === this.num) {  //Perfect fractional square scenario
                        return low;
                    }
                    else if (low * low < this.num && high * high > this.num) {
                        tempSqrt = low;
                        break inner;
                    }
                }
            }

            return tempSqrt;
        }
    }


    _getIntegerPart(low = 0, high = this.num) {
        let mid = Math.floor((low + high) / 2);

        if (mid * mid === this.num || (mid * mid < this.num && ((mid + 1) * (mid + 1) > this.num))) {
            return mid;
        } else if (mid * mid > this.num) {
            low = 0;
            high = mid;
        } else {
            low = mid;
        }
        return this._getIntegerPart(low, high);
    }
}


module.exports = Solution;