class Stack {
    constructor() {
        this._storage = {};
        this._length = 0
    }
    /**
     * @param  {any} value
     */
    push(value) {
        this._storage[this._length] = value;
        this._length++;
    }

    pop() {
        if (this._length) {
            let lastVal = this._storage[this._length - 1];
            delete this._storage[this._length - 1];
            this._length--;
            return lastVal;
        }
    }

    peek() {
        if (this._length) {
            return this._storage[this._length - 1];;
        }
    }
}

module.exports = Stack;