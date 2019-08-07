var Node = require('./Node');
class Tree {
    constructor(value) {
        this.rootNode = new Node(value);
    }

    getRootNode() {
        return this.rootNode;
    }

    insertChild(node, parentNode = this.rootNode) {
        if ((parentNode.value > node.value)) {
            if (!parentNode.leftChild)
                parentNode.leftChild = node;
            else {
                this.insertChild(node, parentNode.leftChild);
            }
        } else if ((parentNode.value < node.value)) {
            if (!parentNode.rightChild)
                parentNode.rightChild = node;
            else {
                this.insertChild(node, parentNode.rightChild);
            }
        }
    }

    // Uses a Depth-First Traversal
     traverse(parentNode = this.rootNode) {
        if(!parentNode.leftChild && !parentNode.rightChild) {
            return parentNode.value + '-';
        } else {  
            return this.traverse(parentNode.leftChild) + '-' +this.traverse(parentNode.rightChild);
        }
    }

    contains(searchValue) {}

    static size(tree) {}

    static find(tree, value) {}

    insert(parentTree, value) {}

    remove(value) {}

    reorder(node1, node2) {}
}

module.exports = Tree;