import { AdjacencyMatrix, Vertex } from "../types"

export const verticesOf = (g: AdjacencyMatrix): Vertex[] => g.map((_, v) => v)
