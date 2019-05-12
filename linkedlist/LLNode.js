class LLNode {
    constructor(value){
        this.value = value;
        this.next = undefined;
    }

    toString(){
        console.log('[Item value, Next]', '[', this.value, ',',  this.next, ']');
    }
}

module.exports = LLNode;
