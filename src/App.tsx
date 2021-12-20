import computeMIS from "./mis"

import { useSamples } from "./useSamples"
import { useResults } from "./useResults"
import { useEvaluator } from "./useEvaluator"

import "./styles.css"

export default function App() {
  const samples = useSamples()
  const results = useResults()
  const [passing, total] = useEvaluator(samples, results)

  const sample = samples[29]
  const expected = results[29]

  if (!sample || !expected) return <div>loading...</div>

  const [m, mis] = computeMIS(sample.n, sample.edges)

  return (
    <>
      <h1>
        {passing} / {total} scenarios passing
      </h1>
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
            <pre key={i}>{row.join(" ")}</pre>
          ))}
        </section>

        <section>
          <h1>Result</h1>
          <pre>
            {mis.length}
            <br />
            {Array.from(mis).join(" ")}
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
    </>
  )
}
