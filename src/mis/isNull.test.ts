import { isNull } from "./isNull"

describe("isNull", () => {
  it("returns true if graph is completely null", () => {
    const g = [
      [null, null],
      [null, null],
    ]

    expect(isNull(g)).toEqual(true)
  })

  it("returns false if the graph is not completely null", () => {
    const g = [
      [null, null],
      [null, 0],
    ]

    expect(isNull(g)).toEqual(false)
  })
})
