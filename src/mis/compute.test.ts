import { compute } from "./compute"

describe("compute", () => {
  it("computes the maximum independent set of a null graph", () => {
    const g = [
      [null, null],
      [null, null],
    ]

    const mis = compute(g)

    expect(mis.size).toEqual(0)
  })
})
