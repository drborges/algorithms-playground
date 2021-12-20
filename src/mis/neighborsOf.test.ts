import { neighborsOf } from "./neighborsOf"

describe("neighborsOf", () => {
  it("finds all neighbors of a given vertex", () => {
    const g = [
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 0],
    ]

    const neighborsOf0 = neighborsOf(0, g)
    const neighborsOf1 = neighborsOf(1, g)
    const neighborsOf2 = neighborsOf(2, g)

    expect(neighborsOf0).toEqual([1, 2])
    expect(neighborsOf1).toEqual([0, 2])
    expect(neighborsOf2).toEqual([0, 1])
  })
})
