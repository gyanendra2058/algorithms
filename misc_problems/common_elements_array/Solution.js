class Solution {

    constructor() {

    }

    commonElementsOfArrays() {
        let map = new Map();

        if (arguments.length <= 1) {
            throw new Error('Input must have greater than or equal to two arrays')
        } else {
            [...arguments].forEach((arr) => {
                arr.forEach((element) => {
                    if (!map.has(element)) {
                        map.set(element, 0)
                    } else {
                        let currVal = map.get(element);
                        map.set(element, currVal + 1);
                    }
                })
            });
        }
        let results = [];

        map.forEach((val, key) => {
            if (val !== 0) {
                results.push(key);
            }
        })
        console.log('results',results);
        return results;
    }
}

module.exports = Solution;