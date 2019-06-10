class Solution{
    constructor(){

    }

    urlify(ipString, length) {
        let copiedString = '';
        let ipStringArr = [...ipString.trim()];
        ipStringArr.forEach(element => {
            if(element == ' ') {
                copiedString+='%20';
            } else {
                copiedString = copiedString+ element;
            }
        });
        return copiedString;
    }
}

module.exports = Solution;