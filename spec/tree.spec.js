var Tree = require('../trees/Tree');
var Node = require('../trees/Node');

describe('Tree test suite', () => {
    var myTree;
    beforeEach(() => {
        myTree = new Tree(10);
    })

    it('should create a tree with root node', () => {
        expect(myTree.rootNode.value).toEqual(10);
        expect(myTree.rootNode.leftChild).toBeUndefined();
        expect(myTree.rootNode.rightChild).toBeUndefined();
    });

    it('should insert elements in tree', () => {
        var node1 = new Node(5);
        var node2 = new Node(15);
        var node3 = new Node(3);
        var node4 = new Node(13);

        myTree.insertChild(node1);
        myTree.insertChild(node2);
        myTree.insertChild(node3);
        myTree.insertChild(node4);

        expect(myTree.rootNode.leftChild.value).toBe(5);
        expect(myTree.rootNode.rightChild.value).toBe(15);

        let rootNodeLeftChild = myTree.rootNode.leftChild;
        let rootNodeRightChild = myTree.rootNode.rightChild;
        expect(rootNodeLeftChild.leftChild.value).toBe(3);
        expect(rootNodeRightChild.leftChild.value).toBe(13);
    })

    it('should test tree traversal', () => {
        var myNewTree = new Tree(10);
        var node1 = new Node(5);
        var node2 = new Node(15);
        var node3 = new Node(3);
        var node4 = new Node(13);
        var node5 = new Node(4);

        myNewTree.insertChild(node1);
        myNewTree.insertChild(node2);
        myNewTree.insertChild(node3);
        myNewTree.insertChild(node4);
        myNewTree.insertChild(node5);

        expect(myNewTree.traverse(myNewTree.getRootNode())).toBe('3-4-5-10-13-15-');
    })
})