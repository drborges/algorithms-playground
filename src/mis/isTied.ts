import { VertexInfo } from "../types"

export const isTied = (verticesInfo: VertexInfo[]) => {
  return verticesInfo[0] && verticesInfo[0].degree === verticesInfo[1]?.degree
}
