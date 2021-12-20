import { tiedVertices } from "./tiedVertices"

describe("tiedVertices", () => {
  it("retrieves the tied vertices from a list of vertices info sorted by degree ascendingly", () => {
    const verticesInfo = [
      { v: 2, degree: 1 },
      { v: 4, degree: 1 },
      { v: 0, degree: 2 },
      { v: 1, degree: 3 },
      { v: 3, degree: 5 },
    ]

    const tied = tiedVertices(verticesInfo)

    expect(tied).toEqual([2, 4])
  })

  it("retrieves the first vertex when there's no tie", () => {
    const verticesInfo = [
      { v: 2, degree: 1 },
      { v: 0, degree: 2 },
      { v: 1, degree: 3 },
      { v: 3, degree: 4 },
    ]

    const tied = tiedVertices(verticesInfo)

    expect(tied).toEqual([2])
  })
})
