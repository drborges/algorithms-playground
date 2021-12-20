import { useEffect, useState } from "react"

import type { Result } from "./types"

export const ENDPOINT =
  "https://gist.githubusercontent.com/benlangfeld/ef5369acacb185772e6ff6c9f70c7558/raw/c255a8f05dbef6c9faf092051a5df1e9b2fa669b/target2.txt"

const safelyParseInt = (num?: string) => parseInt(num || "0", 10)
const definitionToNumbers = (definition?: string): number[] =>
  definition?.split(" ").map(safelyParseInt) || []

function extractResults(input: string): Result[] {
  const results: Result[] = []
  const lines = input.split("\n").filter((line) => line.length > 0)

  while (lines.length > 0) {
    const count = safelyParseInt(lines.shift())
    const vertices = definitionToNumbers(lines.shift())
    results.push({
      count,
      vertices,
      id: results.length,
    })
  }

  return results
}

export function useResults(endpoint = ENDPOINT): Result[] {
  const [results, setResults] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await fetch(endpoint)
      const input = await response.text()

      setResults(extractResults(input))
    })()
  }, [endpoint])

  return results
}
