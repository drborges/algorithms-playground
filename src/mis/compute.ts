import { selectVertex } from "./selectVertex"
import { createInducedGraph } from "./createInducedGraph"
import { isNull } from "./isNull"

import type { AdjacencyMatrix, Vertex } from "../types"

export const compute = (
  g: AdjacencyMatrix,
  mis = new Set<Vertex>(),
): Vertex[] => {
  if (!isNull(g)) {
    const [v, neighbors] = selectVertex(g)
    mis.add(v)
    const inducedGraph = createInducedGraph(g, [v, ...neighbors])
    return compute(inducedGraph, mis)
  }

  return Array.from(mis)
}
