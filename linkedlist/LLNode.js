class LLNode {
    constructor(value){
        this.value = value;
        this.next = undefined;
    }

    toString(){
        console.log(this.value, '->',  (this.next !== undefined) ? this.next.value : 'null');
    }
}

module.exports = LLNode;
