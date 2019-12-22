const Stack = require('../../stack/Stack');

class Solution {
    constructor() {
        this._stack = new Stack();
        this._map = {};
    }

    getNextGreaterElementInArray(array) {
        this._stack.push(array[0]);

        for (let i = 1; i < array.length; i++) {
            let current = array[i];

            if (this._stack.peek() > current) {
                this._stack.push(current);
            } else {
                this._popTillEnd(current);
            }
        }
        this._popTillEmpty();
        return this._map;

    }

    _popTillEnd(current) {
        let currentStackElement = this._stack.peek();
        if (!currentStackElement || (currentStackElement > current)) {
            this._stack.push(current);
            return;
        } else {
            this._map[this._stack.pop()] = current;
            this._popTillEnd(current);
        }
    }

    _popTillEmpty() {
        if (typeof this._stack.peek() === 'undefined') {
            return;
        } else {
            let currentStackElement = this._stack.pop();
            this._map[currentStackElement] = -1;
            this._popTillEmpty();
        }
    }
}
module.exports = Solution;