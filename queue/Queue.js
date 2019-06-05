class Queue {

    constructor() {
        this._length = 0;
        this._storage = {};
        this._currentHead = 0;
    }

    enqueue(value) {
        this._storage[this._length] = value;
        this._length++;
    }

    dequeue() {
        let firstVal = this._storage[this._currentHead];
        delete this._storage[this._currentHead];
        this._currentHead++;
        return firstVal;
    }

    peek(){
        return this._storage[this._currentHead];
    }

}

module.exports = Queue;