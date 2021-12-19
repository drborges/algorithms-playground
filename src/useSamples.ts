import { useEffect, useState } from "react"

import type { Edge, Sample } from "./types"

export const SAMPLES_ENDPOINT =
  "https://gist.githubusercontent.com/benlangfeld/ef5369acacb185772e6ff6c9f70c7558/raw/c255a8f05dbef6c9faf092051a5df1e9b2fa669b/sample2.txt"

const safelyParseInt = (num?: string) => parseInt(num || "0", 10)
const definitionToNumbers = (definition?: string): number[] =>
  definition?.split(" ").map(safelyParseInt) || []

function extractSamples(input: string): Sample[] {
  const samples: Sample[] = []
  const lines = input.split("\n").filter((line) => line.length > 0)
  let samplesCount = safelyParseInt(lines.shift())

  while (samplesCount > 0) {
    const [n, edgesCount] = definitionToNumbers(lines.shift())
    const edges: Edge[] = []

    for (let e = edgesCount; e > 0; e--) {
      const edge = definitionToNumbers(lines.shift())
      edges.push(edge as Edge)
    }

    samples.push({ n, edges })

    samplesCount--
  }

  return samples
}

export function useSamples(endpoint = SAMPLES_ENDPOINT): Sample[] {
  const [samples, setSamples] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await fetch(endpoint)
      const input = await response.text()

      setSamples(extractSamples(input))
    })()
  }, [endpoint])

  return samples
}
