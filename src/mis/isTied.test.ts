import { isTied } from "./isTied"

describe("isTied", () => {
  it("returns true when there's at least two vertices tied in a list of sorted vertices by their degree", () => {
    const verticesInfo = [
      { v: 2, degree: 1 },
      { v: 4, degree: 1 },
      { v: 0, degree: 2 },
      { v: 1, degree: 3 },
      { v: 3, degree: 5 },
    ]

    expect(isTied(verticesInfo)).toEqual(true)
  })

  it("returns false when there's no vertices tied in a list of sorted vertices by their degree", () => {
    const verticesInfo = [
      { v: 2, degree: 1 },
      { v: 0, degree: 2 },
      { v: 1, degree: 3 },
      { v: 3, degree: 5 },
    ]

    expect(isTied(verticesInfo)).toEqual(false)
  })
})
