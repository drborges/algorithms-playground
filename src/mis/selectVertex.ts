import { AdjacencyMatrix, Selection, Vertex, VertexInfo } from "../types"

const degree = (v: Vertex, g: AdjacencyMatrix): number => {
  return g[v].reduce((acc, connection) => acc + connection, 0)
}

const byDegree = (level: number) => (
  info1: VertexInfo,
  info2: VertexInfo,
): number => {
  const direction = level % 2 === 0 ? -1 : 1
  if (info1.degree > info2.degree) return 1 * direction
  if (info1.degree < info2.degree) return -1 * direction
  return 0
}

const neighborsOf = (v: Vertex, g: AdjacencyMatrix): Vertex[] => {
  const neighbors: Vertex[] = []

  g[v].forEach((connection, neighbor) => {
    if (connection === 1) neighbors.push(neighbor)
  })

  return neighbors
}

const unvisited = (vertices: Vertex[], visited: Set<Vertex>): Vertex[] => {
  return vertices.filter((v) => !visited.has(v))
}

const computeDegree = (g: AdjacencyMatrix) => (v: Vertex) => ({
  v,
  degree: degree(v, g),
})

const computeVerticesDegrees = (
  vertices: Vertex[],
  g: AdjacencyMatrix,
  level: number = 1,
  visited = new Set<Vertex>(),
): VertexInfo[] => {
  // if (level > 1) {
  //   vertices.forEach((v) => visited.add(v))
  //   const neighbors = vertices.flatMap((v) => neighborsOf(v, g))
  //   return computeVerticesDegrees(neighbors, g, level - 1, visited)
  // }

  // return unvisited(vertices, visited).map(computeDegree(g))
  return []
}

const verticesOf = (g: AdjacencyMatrix): Vertex[] => g.map((_, v) => v)
const tied = (verticesInfo: VertexInfo[]) => {
  return verticesInfo[0].degree === verticesInfo[1].degree
}

export const selectVertex = (g: AdjacencyMatrix): Selection => {
  let v = null
  let level = 1

  while (v === null) {
    const verticesInfo = computeVerticesDegrees(verticesOf(g), g, level).sort(
      byDegree(level),
    )

    if (tied(verticesInfo)) {
      level++
    } else {
      v = verticesInfo[0].v
    }
  }

  return [v, neighborsOf(v, g)]
}
