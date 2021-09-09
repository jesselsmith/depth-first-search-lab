function depthFirstSearch(rootNode, vertices, edges){
    let stack = []
    let record = []
    stack.push(rootNode)
    record.push(rootNode)
    while(stack.length > 0){
        let currentVertex = stack.pop()
        
        if(!currentVertex.discovered){
            currentVertex.discovered = true
        }
        let adjacentVertices = findAdjacent(currentVertex.name, vertices, edges)

        adjacentVertices.forEach(vertex => {
            stack.push(vertex)
            record.push(vertex)
        })
    }
    return record
}

function findAdjacent(nodeName, vertices, edges){
    let adjacentNodes = []

    edges.forEach(edge => {
        let indexInEdge = edge.indexOf(nodeName)

        if(indexInEdge == 0){
            adjacentNodes.push(edge[1])
        }else if(indexInEdge == 1){
            adjacentNodes.push(edge[0])
        }
    })

    return vertices.filter(vertex => { 
        return adjacentNodes.includes(vertex.name) && !vertex.discovered
    })
}