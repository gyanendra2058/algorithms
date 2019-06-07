class Solution{
    constructor(){
    }

    isUnique(ipString) {
        let obj = {};
        let charArray = [...ipString];
        let result = true;
        for(let i =0 ; i< charArray.length; i++){
            if(!obj[charArray[i]]){
                obj[charArray[i]] = 'someval';
            } else {
                result = false;
                break;
            }
        }

        return result;
    }
}

module.exports = Solution;