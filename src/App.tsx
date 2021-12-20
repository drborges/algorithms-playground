import { useState } from "react"
import computeMIS from "./mis"

import { useSamples } from "./useSamples"
import { useResults } from "./useResults"
import { useEvaluator } from "./useEvaluator"

import "./styles.css"

export default function App() {
  const samples = useSamples()
  const results = useResults()
  const [currentSample, setCurrentSample] = useState(0)
  const [passing, failing] = useEvaluator(samples, results)

  const misNotFound = (id) => failing.some((sample) => sample.id === id)
  const sample = samples[currentSample]
  const expected = results[sample?.id]

  if (!sample || !expected) return <div>loading...</div>

  // Attempts to compute the Maximum Independent Set of a given graph
  // using a greedy algorithm based on the following paper:
  // https://www.gcsu.edu/sites/files/page-assets/node-808/attachments/ballardmyer.pdf
  //
  // Since a greedy algorithm is being used, it's not garanteed that it will always find
  // the best answer, yet, the results will be very close to the ideal solution.
  const [m, mis] = computeMIS(sample.n, sample.edges)

  const handleOnNextSample = () => {
    if (currentSample < samples.length - 1) {
      setCurrentSample(currentSample + 1)
    }
  }

  const handleOnPreviousSample = () => {
    if (currentSample > 0) {
      setCurrentSample(currentSample - 1)
    }
  }

  const handleSampleChange = (e) => {
    const sampleId = parseInt(e.target.value, 10)
    setCurrentSample(sampleId)
  }

  return (
    <>
      <h1>Maximum Independent Set (MIS)</h1>

      <h2>
        MIS found for <span>{passing.length}</span> out of{" "}
        <span>{samples.length}</span>
        samples
      </h2>

      <div className="card">
        <h3>
          <span>Viewing Sample #{currentSample}</span>
        </h3>

        <h3>
          <button onClick={handleOnPreviousSample}>Previous Sample</button>
          <span>
            <select value={currentSample} onChange={handleSampleChange}>
              {samples.map(({ id }) => (
                <option key={id} value={id}>
                  #{id} ({misNotFound(id) ? "Not Found" : "Found"})
                </option>
              ))}
            </select>
          </span>
          <button onClick={handleOnNextSample}>Next Sample</button>
        </h3>

        <div className="sample">
          <section>
            <h3>Input</h3>
            <pre>
              {sample.n} {sample.edges.length}
              {sample.edges.map((edge, i) => (
                <pre key={i}>{edge.join(" ")}</pre>
              ))}
            </pre>
          </section>

          <section>
            <h3>Adjacency Matrix</h3>
            {m.map((row, i) => (
              <pre key={i}>{row.join(" ")}</pre>
            ))}
          </section>

          <div className="results">
            <section
              className={misNotFound(currentSample) ? "notFound" : "found"}
            >
              <h3>Computed Result</h3>
              <pre>
                {mis.length}
                <br />
                {Array.from(mis).join(" ")}
              </pre>
            </section>

            <section>
              <h3>Possible Result</h3>
              <pre>
                {expected.count}
                <br />
                {expected.vertices.join(" ")}
              </pre>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
