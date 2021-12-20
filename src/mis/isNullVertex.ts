import { AdjacencyMatrix } from "../types"

export function isNullVertex(g: AdjacencyMatrix, v: number) {
  return g[v].every((edge) => edge === null)
}
