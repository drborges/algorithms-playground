import graphColoring from "./graphColoring"
import { createGraph } from "./createGraph"

import { useSamples } from "./useSamples"
import { useResults } from "./useResults"

import "./styles.css"

/**
 * 1. Given a graph G
 * 2. Choose the vertex with the lowest primary degree
 *   - if there's a tie
 *     1. compute the secondary degree of the tied vertices and choose the vertex with the highest one;
 *     2. if there's another tie, choose the vertex with the lowest third degree;
 *     - upon ties, continue this process alternating between highest and lowest degree until a vertex can be chosen;
 *     - while performing this process, ignore vertices visited on previous levels;
 *     - if all vetices tie on all levels, choose any vertex to start
 * 4. Add the selected vertex to the independent set;
 * 5. Create a new graph G' excluding the selected vertex and all of its neighbors;
 * 6. Repeat the process for the new G' graph;
 * 7. The algorithm ends when G' is a null graph; At which point, the selected independent set is maximum.
 */

export default function App() {
  const samples = useSamples()
  const results = useResults()
  // const sample = samples[29]
  // const expected = results[29]
  const sample = samples[60]
  const expected = results[60]

  if (!sample || !expected) return <div>loading...</div>

  const m = createGraph(sample.n, sample.edges)
  const [count, blackVertices] = graphColoring(m)

  return (
    <div className="App">
      <section>
        <h1>Input</h1>
        <pre>
          {sample.n} {sample.edges.length}
          {sample.edges.map((edge, i) => (
            <pre key={i}>{edge.join(" ")}</pre>
          ))}
        </pre>
      </section>

      <section>
        <h1>Adjacency Matrix</h1>
        {m.map((row, i) => (
          <pre key={i}>
            {row.map((connected) => (connected ? 1 : 0)).join(" ")}
          </pre>
        ))}
      </section>

      <section>
        <h1>Result</h1>
        <pre>
          {count}
          <br />
          {blackVertices.join(" ")}
        </pre>
      </section>

      <section>
        <h1>Expected</h1>
        <pre>
          {expected.count}
          <br />
          {expected.vertices.join(" ")}
        </pre>
      </section>
    </div>
  )
}

// 4
// 6 8 9 12
