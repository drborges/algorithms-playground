import { byDegree } from "./byDegree"

describe("byDegree", () => {
  it("orders a list of vertices info by their degree ascending when level is an odd number", () => {
    const verticesInfo = [
      { v: 1, degree: 3 },
      { v: 0, degree: 2 },
      { v: 3, degree: 5 },
      { v: 2, degree: 1 },
      { v: 4, degree: 1 },
    ]

    const ordered = verticesInfo.sort(byDegree(1))

    expect(ordered).toEqual([
      { v: 2, degree: 1 },
      { v: 4, degree: 1 },
      { v: 0, degree: 2 },
      { v: 1, degree: 3 },
      { v: 3, degree: 5 },
    ])
  })

  it("orders a list of vertices info by their degree descending when level is an even number", () => {
    const verticesInfo = [
      { v: 1, degree: 3 },
      { v: 0, degree: 2 },
      { v: 3, degree: 5 },
      { v: 2, degree: 1 },
      { v: 4, degree: 1 },
    ]

    const ordered = verticesInfo.sort(byDegree(2))

    expect(ordered).toEqual([
      { v: 3, degree: 5 },
      { v: 1, degree: 3 },
      { v: 0, degree: 2 },
      { v: 2, degree: 1 },
      { v: 4, degree: 1 },
    ])
  })

  it("moves null vertices (e.g. negative degree) to the end of an ascending list", () => {
    const verticesInfo = [
      { v: 2, degree: -1 },
      { v: 1, degree: 3 },
      { v: 4, degree: -1 },
      { v: 0, degree: 2 },
      { v: 3, degree: 5 },
    ]

    const ordered = verticesInfo.sort(byDegree(1))

    expect(ordered).toEqual([
      { v: 0, degree: 2 },
      { v: 1, degree: 3 },
      { v: 3, degree: 5 },
      { v: 2, degree: -1 },
      { v: 4, degree: -1 },
    ])
  })

  it("moves null vertices (e.g. negative degree) to the end of a descending list", () => {
    const verticesInfo = [
      { v: 2, degree: -1 },
      { v: 1, degree: 3 },
      { v: 4, degree: -1 },
      { v: 0, degree: 2 },
      { v: 3, degree: 5 },
    ]

    const ordered = verticesInfo.sort(byDegree(2))

    expect(ordered).toEqual([
      { v: 3, degree: 5 },
      { v: 1, degree: 3 },
      { v: 0, degree: 2 },
      { v: 2, degree: -1 },
      { v: 4, degree: -1 },
    ])
  })
})
