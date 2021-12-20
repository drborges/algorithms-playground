import { AdjacencyMatrix, Vertex } from "../types"

export const computeDegree = (v: Vertex, g: AdjacencyMatrix): number => {
  const sum = (acc: number | null, connection: number | null) =>
    (acc || 0) + (connection || 0)

  return g[v].reduce(sum, 0) as number
}
