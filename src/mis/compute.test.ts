import { compute } from "./compute"

describe("compute", () => {
  it("computes the maximum independent set of a null graph", () => {
    const g = [
      [null, null],
      [null, null],
    ]

    const mis = compute(g)

    expect(mis).toEqual([])
  })

  it("computes the maximum independent set of a single vertex graph", () => {
    const g = [[0]]

    const mis = compute(g)

    expect(mis).toEqual([0])
  })

  it("computes the maximum independent set of a two vertices graph", () => {
    const g = [
      [0, 1],
      [1, 0],
    ]

    const mis = compute(g)

    expect(mis).toEqual([0])
  })

  it("computes the maximum independent set of an incomplete three vertices graph", () => {
    const g = [
      [0, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ]

    const mis = compute(g)

    expect(mis).toEqual([1, 2])
  })
})
