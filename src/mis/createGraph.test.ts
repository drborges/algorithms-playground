import { Edge } from "../types"
import { createGraph } from "./createGraph"

describe("createGraph", () => {
  it("creates a disconnected graph with 4 nodes", () => {
    const n = 3
    const edges = [] as Edge[]
    const g = createGraph(n, edges)

    expect(g[0]).toEqual([0, 0, 0])
    expect(g[1]).toEqual([0, 0, 0])
    expect(g[2]).toEqual([0, 0, 0])
  })

  it("creates a connected graph with 4 nodes and 3 edges", () => {
    const n = 4
    const edges = [
      [1, 2],
      [2, 3],
      [3, 4],
    ] as Edge[]

    const g = createGraph(n, edges)

    expect(g[0]).toEqual([0, 1, 0, 0])
    expect(g[1]).toEqual([1, 0, 1, 0])
    expect(g[2]).toEqual([0, 1, 0, 1])
    expect(g[3]).toEqual([0, 0, 1, 0])
  })
})
