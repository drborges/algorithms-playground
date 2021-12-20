import { selectVertex } from "./selectVertex"

describe("selectVertex", () => {
  it("selects the disconnected vertex as the lowest primary degree", () => {
    const g = [
      [0, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ]

    const [v, neighbors] = selectVertex(g)

    expect(v).toEqual(2)
    expect(neighbors).toEqual([])
  })

  it("selects the vertex with the lowest primary degree", () => {
    const g = [
      [0, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 0, 1, 0],
    ]

    const [v, neighbors] = selectVertex(g)

    expect(v).toEqual(1)
    expect(neighbors).toEqual([0])
  })

  it("selects the vertex with the highest secondary degree", () => {
    const g = [
      [0, 1, 1, 1, 0],
      [1, 0, 0, 1, 0],
      [1, 0, 0, 0, 1],
      [1, 1, 0, 0, 1],
      [0, 0, 1, 1, 0],
    ]

    const [v, neighbors] = selectVertex(g)

    expect(v).toEqual(1)
    expect(neighbors).toEqual([0, 3])
  })

  it("selects the vertex with the lowest tertiary degree", () => {
    const g = [
      [0, 1, 1, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 1, 0],
      [1, 1, 0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 0, 1, 0, 0],
      [1, 0, 0, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 1, 0],
    ]

    const [v, neighbors] = selectVertex(g)

    expect(v).toEqual(4)
    expect(neighbors).toEqual([3, 5])
  })
})
