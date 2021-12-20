import { AdjacencyMatrix, Selection } from "../types"
import { byDegree } from "./byDegree"
import { isTied } from "./isTied"
import { neighborsOf } from "./neighborsOf"
import { tiedVertices } from "./tiedVertices"
import { verticesOf } from "./verticesOf"
import { computeVertexInfo } from "./computeVertexInfo"

export const selectVertex = (
  g: AdjacencyMatrix,
  vertices = verticesOf(g),
  level = 1,
): Selection => {
  const computeInfo = computeVertexInfo(g, { level })
  const verticesInfo = vertices.map((v) => computeInfo(v)).sort(byDegree(level))

  if (isTied(verticesInfo) && verticesInfo[0].degree !== 0) {
    return selectVertex(g, tiedVertices(verticesInfo), level + 1)
  }

  const v = verticesInfo[0].v
  const neighbors = neighborsOf(v, g)

  return [v, neighbors]
}
