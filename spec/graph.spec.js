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

    describe('directed graph', () => {
        var directedGraph;
        beforeEach(() => {
            directedGraph = new Graph('directed');
            directedGraph.addNode(1);
            directedGraph.addNode(2);
            directedGraph.addNode(3);
            directedGraph.addNode(4);
            directedGraph.addEdge(1,3);
            directedGraph.addEdge(2,3);
            directedGraph.addEdge(1,2);
            directedGraph.addEdge(2,4);
            directedGraph.addEdge(4,3);
        })
        it('should add only edge is the list from node1 to node2', () => {
            let result = "|1: 3,2| |2: 3,4| |3: | |4: 3|";
            expect(directedGraph.toString()).toBe(result);
        });

        it('should remove edge only from node1 to node2 not vice-versa', () => {
            directedGraph.removeEdge(1,2);
            directedGraph.removeEdge(2,4);
            let result = "|1: 3| |2: 3| |3: | |4: 3|";
            expect(directedGraph.toString()).toBe(result);
        });

        xit('should check the route exists between nodes', () => {
            directedGraph.addNode(5);
            directedGraph.addNode(6);
            directedGraph.addNode(7);
            directedGraph.addEdge(4,5);
            directedGraph.addEdge(6,5);
            directedGraph.addEdge(7,5);
            directedGraph.addEdge(7,4);

            let result = "|1: 3,2| |2: 3,4| |3: | |4: 3,5| |5: | |6: 5| |7: 5,4|";
            expect(directedGraph.toString()).toBe(result);
            expect(directedGraph.routeExists(2,6)).toBe(false);
            //expect(directedGraph.routeExists(1,5)).toBe(true);
        })
    })
})