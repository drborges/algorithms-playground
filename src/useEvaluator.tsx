import computeMIS from "./mis"
import { Result, Sample } from "./types"

export function useEvaluator(
  samples: Sample[] = [],
  results: Result[] = [],
): [number, number] {
  let passing = 0

  samples.forEach((sample, i) => {
    const result = computeMIS(sample.n, sample.edges)

    if (result[1].length === results[i]?.count) {
      passing++
    }
  })

  return [passing, samples.length]
}
