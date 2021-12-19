import { compute } from "./compute"
import { createGraph } from "./createGraph"
import { Edge, Vertex } from "../types"

export default function computeMIS(n: Vertex, edges: Edge[] = []): Set<Vertex> {
  return compute(createGraph(n, edges))
}
