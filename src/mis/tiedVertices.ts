import { VertexInfo } from "../types"

export const tiedVertices = (verticesInfo: VertexInfo[]) => {
  const firstInfo = verticesInfo[0]
  return verticesInfo
    .filter((info) => info.degree === firstInfo.degree)
    .map((info) => info.v)
}
