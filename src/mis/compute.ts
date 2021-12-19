import { selectVertex } from "./selectVertex"
import { createInducedGraph } from "./createInducedGraph"
import { isNull } from "./isNull"

import type { AdjacencyMatrix, Vertex } from "../types"

export const compute = (
  g: AdjacencyMatrix,
  mis = new Set<Vertex>(),
): Set<Vertex> => {
  if (!isNull(g)) {
    const [v, neighbors] = selectVertex(g)
    mis.add(v)
    return compute(createInducedGraph(g, [v, ...neighbors]), mis)
  }

  return mis
}
