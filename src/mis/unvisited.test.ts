import { unvisited } from "./unvisited"

describe("unvisited", () => {
  it("computes the unvisited vertices from a given list and set of visited vertices", () => {
    const vertices = [0, 1, 2, 3]
    const visited = [0, 2]

    const unvisitedVertices = unvisited(vertices, visited)

    expect(unvisitedVertices).toEqual([1, 3])
  })
})
