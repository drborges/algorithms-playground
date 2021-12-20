import { computeDegree } from "./computeDegree"

describe("computeDegree", () => {
  it("computes a vertex degree for a given graph", () => {
    const g = [
      [0, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ]

    expect(computeDegree(0, g)).toEqual(2)
    expect(computeDegree(1, g)).toEqual(1)
    expect(computeDegree(2, g)).toEqual(1)
  })
})
