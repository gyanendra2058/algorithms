const GraphNode = require('./GraphNode');

class Graph {
    /**
     * @param  {String} type
     * @returns A graph object
     */
    constructor(type) {
        this._storage = new Map();
        this._directed = (type === 'directed') ? true : false;
    }

    addNode(nodeValue) {
        let newGraphNode = new GraphNode(nodeValue);
        this._storage.set(nodeValue, newGraphNode);
    }

    addEdge(node1Value, node2Value) {
        let node1 = this._storage.get(node1Value);
        let node2 = this._storage.get(node2Value);

        if (!this._storage.has(node1Value) || !this._storage.has(node2Value)) {
            throw new Error('Cannot add an edge, since one or both nodes are missing in graph');
        } else if (node1.edges.includes(node2Value)) {
            // Node already present;
            throw new Error('Cannot add an edge, since edge already exist in graph');
        } else {
            if (!this._directed) {
                node1.edges.push(node2Value);
                node2.edges.push(node1Value);
            } else {
                node1.edges.push(node2Value);
            }
        }
    }

    removeEdge(node1Value, node2Value) {
        let node1 = this._storage.get(node1Value);
        let node2 = this._storage.get(node2Value);
        if (!this._storage.has(node1Value) || !this._storage.has(node2Value)) {
            throw new Error('Cannot remove an edge, since one or both nodes are missing in graph');
        } else if (!node1.edges.includes(node2Value)) {
            throw new Error('Cannot remove an edge, since edge does not exist b/w the nodes');
        } else {
            let foundIndex1 = node1.edges.indexOf(node2Value);
            if (!this._directed) {
                let foundIndex2 = node2.edges.indexOf(node1Value);
                node1.edges.splice(foundIndex1, 1);
                node2.edges.splice(foundIndex2, 1);
            } else {
                node1.edges.splice(foundIndex1, 1);
            }
        }
    }

    toString() {
        let graphString = '';
        this._storage.forEach((v, k) => {
            graphString += `|${k}: ${v.edges.toString()}| `;
        });
        return graphString.trim();
    }
    /**
     * @param  {any} node1
     * @param  {any} node2
     * @return {Boolean} if any route exits b/w node1 amd node2
     */
    // routeExists(node1Value, node2Value) {
    //     let result = false;
    //     let node1 = this._storage.get(node1Value);
    //     if (node1.edges.includes(node2Value)) {
    //         result = true;
    //         return result;
    //     } else { // Traverse every connected vertex in a BFS way
    //             // node1.edges = node1.edges.splice(0,1);
    //             return result || this.routeExists(node1.edges.splice(0,1), node2Value);
            
    //     }
    // }
}
module.exports = Graph;