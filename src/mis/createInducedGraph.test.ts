import { createInducedGraph } from "./createInducedGraph"

describe("createInducedGraph", () => {
  it("creates an induced graph by removing a list of given vertices", () => {
    const g = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 1, 1, 0],
    ]

    const inducedG = createInducedGraph(g, [0, 1])

    expect(inducedG).toEqual([
      [null, null, null, null],
      [null, null, null, null],
      [null, null, 0, 1],
      [null, null, 1, 0],
    ])
  })
})
