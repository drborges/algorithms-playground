import { VertexInfo } from "../types"

export const byDegree = (level: number) => (
  info1: VertexInfo,
  info2: VertexInfo,
): number => {
  const direction = level % 2 === 0 ? -1 : 1
  if (info1.degree < 0) return 1
  if (info2.degree < 0) return -1
  if (info1.degree > info2.degree) return 1 * direction
  if (info1.degree < info2.degree) return -1 * direction
  return 0
}
