class Solution {

    constructor() {
        this.storageArray = new Array(3000);
        this.initializeStackIndexMap();
    }

    initializeStackIndexMap() {
        this.stackIndexMap = new Map();
        this.stackIndexMap.set('stack1', 0);
        this.stackIndexMap.set('stack2', 0);
        this.stackIndexMap.set('stack3', 0);
    }

    push(stackName, item) {
        let pushIndex = this._calculateIndex(stackName).pushIndex;
        this.storageArray[pushIndex] = item;
        this.stackIndexMap.set(stackName, this.stackIndexMap.get(stackName) + 1);
    }

    _calculateIndex(stackName) {
        let pushIndex = 0;
        let peekIndex = 0;
        if (stackName === 'stack1') {
            pushIndex = 3 * (this.stackIndexMap.get('stack1'));
            peekIndex = 3 * (this.stackIndexMap.get('stack1') -1);
        } else if (stackName == 'stack2') {
            pushIndex = 3 * (this.stackIndexMap.get('stack2')) + 1;
            peekIndex = 3 * (this.stackIndexMap.get('stack2') - 1) + 1;
        } else {
            pushIndex = 3 * (this.stackIndexMap.get('stack3')) + 2;
            peekIndex = 3 * (this.stackIndexMap.get('stack3') - 1) + 2;
        }

        return {
            pushIndex,
            peekIndex
        };
    }

    peek(stackName) {
        let top = this._calculateIndex(stackName).peekIndex;
        return this.storageArray[top];
    }

    pop(stackName) {
        let popIndex = this._calculateIndex(stackName).peekIndex;
        this.stackIndexMap.set(stackName, this.stackIndexMap.get(stackName) -1);
        let topItem = this.storageArray[popIndex];
        this.storageArray[popIndex] = undefined; // 
        return topItem;
    }
}

module.exports = Solution;