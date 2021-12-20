import { verticesOf } from "./verticesOf"

describe("verticesOf", () => {
  it("finds all vertices of a given graph", () => {
    const g = [
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 0],
    ]

    expect(verticesOf(g)).toEqual([0, 1, 2])
  })
})
