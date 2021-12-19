import { AdjacencyMatrix } from "../types"

export const isNull = (g: AdjacencyMatrix) => {
  return g.every((row) => row.every((edge) => edge === null))
}
