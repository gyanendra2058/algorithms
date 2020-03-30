class Solution {

    constructor() {}

    removeDups(str) {
        let arrWithDups = str.split(" ");
        let arrWithoutDups = [];
        let map = new Map();
        arrWithDups.forEach(element => {
            if(!map.has(element)) {
                map.set(element, true);
                arrWithoutDups = arrWithoutDups.concat(element);
            }
        });
        return arrWithoutDups.join(" ");
    }
}

module.exports = Solution;