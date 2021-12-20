import { computeVertexInfo } from "./computeVertexInfo"

describe("computeVertexInfo", () => {
  it("computes the primary degree of a given vertex", () => {
    const g = [
      [0, 1, 1, 1, 1, 0, 0],
      [1, 0, 0, 1, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0],
      [1, 1, 1, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 0, 0, 1],
      [0, 1, 0, 1, 1, 1, 0],
    ]

    const computeInfo = computeVertexInfo(g)

    expect(computeInfo(0)).toEqual({
      v: 0,
      degree: 4,
    })
  })

  it("computes the secondary degree of a given vertex", () => {
    const g = [
      [0, 1, 1, 1, 1, 0, 0],
      [1, 0, 0, 1, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0],
      [1, 1, 1, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 0, 0, 1],
      [0, 1, 0, 1, 1, 1, 0],
    ]

    const computeInfo = computeVertexInfo(g, {
      level: 2,
    })

    expect(computeInfo(0)).toEqual({
      v: 0,
      degree: 15,
    })
  })

  it("computes the tertiary degree of a given vertex", () => {
    const g = [
      [0, 1, 1, 1, 1, 0, 0],
      [1, 0, 0, 1, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0],
      [1, 1, 1, 0, 0, 1, 1],
      [1, 1, 0, 0, 0, 0, 1],
      [0, 0, 1, 1, 0, 0, 1],
      [0, 1, 0, 1, 1, 1, 0],
    ]

    const computeInfo = computeVertexInfo(g, {
      level: 3,
    })

    expect(computeInfo(0)).toEqual({
      v: 0,
      degree: 7,
    })
  })

  it("computes the primary degree of a null vertex", () => {
    const g = [
      [null, null, null],
      [null, 0, 1],
      [null, 1, 0],
    ]

    const computeInfo = computeVertexInfo(g)

    expect(computeInfo(0)).toEqual({
      v: 0,
      degree: -1,
    })
  })
})
