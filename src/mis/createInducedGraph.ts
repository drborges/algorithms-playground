import { AdjacencyMatrix, Vertex } from "../types"

export const createInducedGraph = (
  previousGraph: AdjacencyMatrix,
  excludedVertices: Vertex[],
): AdjacencyMatrix => {
  const n = previousGraph.length
  return previousGraph
    .map((row, v) => (excludedVertices.includes(v) ? Array(n).fill(null) : row))
    .map((row) =>
      row.map((connection, v) =>
        excludedVertices.includes(v) ? null : connection,
      ),
    )
}
