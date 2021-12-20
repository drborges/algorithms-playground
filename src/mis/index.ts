import { compute } from "./compute"
import { createGraph } from "./createGraph"
import { AdjacencyMatrix, Edge, Vertex } from "../types"

export default function computeMIS(
  n: Vertex,
  edges: Edge[] = [],
): [AdjacencyMatrix, Vertex[]] {
  const g = createGraph(n, edges)
  return [g, compute(g).map((v) => v + 1)]
}
