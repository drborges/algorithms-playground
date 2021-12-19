import { AdjacencyMatrix, Edge, Vertex } from "../types"

export const createGraph = (n: Vertex, edges: Edge[] = []): AdjacencyMatrix => {
  const matrix = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0))

  edges.forEach(([v1, v2]) => {
    // vertices are numbered from 1 ... n
    // thus we need to account for zero-based
    // array indexing
    matrix[v1 - 1][v2 - 1] = 1
    matrix[v2 - 1][v1 - 1] = 1
  })

  return matrix
}
