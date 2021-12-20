import { AdjacencyMatrix, Vertex, VertexInfo } from "../types"
import { computeDegree } from "./computeDegree"
import { isNullVertex } from "./isNullVertex"
import { neighborsOf } from "./neighborsOf"
import { unvisited } from "./unvisited"

export const computeVertexInfo = (g: AdjacencyMatrix, { level = 1 } = {}) => (
  v: Vertex,
  vertices = [v],
  visited = [] as Vertex[],
): VertexInfo => {
  if (isNullVertex(g, v)) {
    return {
      v,
      degree: -1,
    }
  }

  if (level > 1) {
    visited.push(...vertices)
    const neighbors = vertices.flatMap((v) => neighborsOf(v, g))
    const unvisitedNeighbors = unvisited(neighbors, visited)
    return computeVertexInfo(g, { level: level - 1 })(
      v,
      [...new Set(unvisitedNeighbors)],
      visited,
    )
  }

  return {
    v,
    degree: vertices
      .map((v) => computeDegree(v, g))
      .reduce((sum, degree) => sum + degree, 0),
  }
}
