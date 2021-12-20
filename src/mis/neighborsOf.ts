import { AdjacencyMatrix, Vertex } from "../types"

export const neighborsOf = (v: Vertex, g: AdjacencyMatrix): Vertex[] => {
  const neighbors: Vertex[] = []

  g[v].forEach((connection, neighbor) => {
    if (connection === 1) neighbors.push(neighbor)
  })

  return neighbors
}
