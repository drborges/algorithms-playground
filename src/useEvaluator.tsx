import computeMIS from "./mis"
import { Result, Sample } from "./types"

export function useEvaluator(
  samples: Sample[] = [],
  results: Result[] = [],
): [Sample[], Sample[]] {
  const passing: Sample[] = []
  const failing: Sample[] = []

  samples.forEach((sample, i) => {
    const result = computeMIS(sample.n, sample.edges)

    if (result[1].length === results[i]?.count) {
      passing.push(sample)
    } else {
      failing.push(sample)
    }
  })

  return [passing, failing]
}
