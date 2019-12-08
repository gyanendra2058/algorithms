class Solution {
    constructor(ipArray) {
        this.ipArray = ipArray;
    }

    binarySearch2(key) {
        let pivotIdx = this.findPivotIdx() + 1;
        let arrLeft = this.ipArray.slice(0, pivotIdx - 1);
        let arrRight = this.ipArray.slice(pivotIdx);
        let firstHalf = this.binarySearch(key, arrLeft);
        let secondHalf = this.binarySearch(key, arrRight);

        return Math.max(firstHalf, (pivotIdx + secondHalf));
    }

    binarySearch(key, arr = this.ipArray) {
        let mid = Math.floor((arr.length) / 2);
        if (arr.length === 0 || (arr.length === 1 && arr[mid] !== key)) {
            return -1000000;
        }
        else if (arr[mid] === key) {
            return mid;
        } else if (key > arr[mid]) { // Key can lie only left
            return (mid + 1) + this.binarySearch(key, arr.slice(mid + 1));
        } else if (key < arr[mid]) {
            return 0 + this.binarySearch(key, arr.slice(0, mid));
        }
    }

    findPivotIdx() {
        let start = 0;
        let end = this.ipArray.length - 1;
        let pivotIdx = 0;

        while (start <= end) {

            let mid = Math.floor((start + end) / 2);
            if (this.ipArray[mid] > this.ipArray[mid - 1] && this.ipArray[mid] > this.ipArray[mid + 1]) {
                pivotIdx = mid;
                break;
            } else if (this.ipArray[start] < this.ipArray[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return pivotIdx;
    }

    findPeakPoint(start = 0, end = this.ipArray.length - 1) {
        let mid = Math.floor((start + end) / 2);

        // base case 

        if (mid === 0 || (mid === this.ipArray.length - 1) || this.ipArray[mid] > this.ipArray[mid + 1] && this.ipArray[mid] > this.ipArray[mid - 1]) {
            return mid;
        }

        else if (this.ipArray[mid] > this.ipArray[mid + 1]) { // left part is sorted asc order
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        return this.findPeakPoint(start, end);
    }



}

module.exports = Solution;