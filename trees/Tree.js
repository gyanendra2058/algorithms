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
    traverse(node) {
        // base case 1
        if (typeof node === 'undefined') {
            return '';
        }
        else if (this.isLeafNode(node)) {
            return node.value + '-';
        } else if (this.hasChildren(node)) {
            return this.traverse(node.leftChild) + node.value + '-' +this.traverse(node.rightChild);
        }
    }

    isLeafNode(node) {
        return !node.leftChild && !node.rightChild;
    }

    hasChildren(node) {
        return node.leftChild || node.rightChild;
    }

    contains(searchValue) { }

    static size(tree) { }

    static find(tree, value) { }

    insert(parentTree, value) { }

    remove(value) { }

    reorder(node1, node2) { }
}

module.exports = Tree;