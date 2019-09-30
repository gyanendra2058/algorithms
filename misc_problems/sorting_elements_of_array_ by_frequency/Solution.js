class Solution {
    constructor() {

    }

    sortByFrequency(array) {
        let frequencyMap = new Map();
        let sortedArray = []
        for (let i = 0; i < array.length; i++) {
            if (frequencyMap.has(array[i])) {
                let currentFrequency = frequencyMap.get(array[i]);
                frequencyMap.set(array[i], new Number(currentFrequency).valueOf() + 1);
            } else {
                frequencyMap.set(array[i], 1);
            }
        }
        frequencyMap.forEach((key, value) => {
            let tempArray = new Array(key).fill(value);
            sortedArray = sortedArray.concat(tempArray);
        })

        console.log(sortedArray);
        return sortedArray;
    }
}

module.exports = Solution;