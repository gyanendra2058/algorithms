var Graph = require('../graph/Graph');

describe('Graph test suite', () => {
    var graph;

    beforeEach(() => {
        graph = new Graph();
        graph.addNode(1);
        graph.addNode(2);
        graph.addNode(3);
    });

    it('should add couple of nodes to the graph without any edges b/w them', () => {
        
        let result = "|1: | |2: | |3: |";
        expect(graph.toString()).toEqual(result)
    });

    it('should not add edge if the node does exist in graph', () => {
        expect(() => {
            graph.addEdge(1,5)
        }).toThrowError('Cannot add an edge, since one or both nodes are missing in graph');
    });

    it('should add edge if both the nodes exist in graph', () => {
        graph.addEdge(1,3);
        graph.addEdge(2,3);
        let result = "|1: 3| |2: 3| |3: 1,2|";
        expect(graph.toString()).toEqual(result);
    });

    it('should throw error if edge b/w nodes already exist in graph', () => {
        graph.addEdge(1,3);
        graph.addEdge(2,3);
        expect(() => {
            graph.addEdge(1,3)
        }).toThrowError('Cannot add an edge, since edge already exist in graph');
    });

    it('should throw error if edge b/w nodes does not exist in graph', () => {
        graph.addEdge(1,3);
        graph.addEdge(2,3);
        expect(() => {
            graph.removeEdge(1, 7);
        }).toThrowError('Cannot remove an edge, since one or both nodes are missing in graph');
    });

    it('should throw error if edge b/w nodes doe not exist in graph', () => {
        graph.addEdge(1,3);
        graph.addEdge(2,3);
        expect(() => {
            graph.removeEdge(1, 2);
        }).toThrowError('Cannot remove an edge, since edge does not exist b/w the nodes');
    });

    it('should throw error if edge b/w nodes doe not exist in graph', () => {
        graph.addEdge(1,3);
        graph.addEdge(2,3);
        graph.addEdge(1,2);
        graph.removeEdge(1,3);
        let result = "|1: 2| |2: 3,1| |3: 2|";
        expect(graph.toString()).toBe(result);
    });
})