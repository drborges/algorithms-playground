import { Vertex } from "../types"

export const unvisited = (vertices: Vertex[], visited: Vertex[]): Vertex[] => {
  return vertices.filter((v) => !visited.includes(v))
}
