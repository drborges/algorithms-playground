export type Vertex = number
export type Coloring = number[]
export type ColoringResult = [number, Vertex[]]
export type PriorityQueue = number[]
export type Edge = [number, number]
export type AdjacencyMatrix = number[][]
export type Selection = [Vertex, Vertex[]]
export interface VertexInfo {
  v: Vertex
  degree: number
}

export interface Sample {
  n: number
  edges: Edge[]
}

export interface Result {
  count: number
  vertices: Vertex[]
}
