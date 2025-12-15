import { groupBy, groupBy as lodashGroupBy } from "lodash"
import { bench, describe } from "vitest"

// Create a regular object-based groupBy for comparison
const groupByObject = <R>(array: R[], key: keyof R): Record<string, R[]> => {
  const result: Record<string, R[]> = {}

  for (const item of array) {
    const groupKey = String(item[key])

    if (!result[groupKey]) {
      result[groupKey] = []
    }

    result[groupKey].push(item)
  }

  return result
}

// Test data generators
interface TestItem {
  id: number
  category: string
  name: string
  value: number
}

const generateTestData = (size: number, groupCount: number): TestItem[] => {
  const categories = Array.from({ length: groupCount }, (_, i) => `category_${i}`)

  return Array.from({ length: size }, (_, i) => ({
    id: i,
    category: categories[i % groupCount],
    name: `Item ${i}`,
    value: Math.floor(Math.random() * 1000),
  }))
}

const generateSkewedTestData = (size: number): TestItem[] => {
  const weights = [0.7, 0.2, 0.08, 0.02] // 70% common, 20% rare, etc.

  return Array.from({ length: size }, (_, i) => {
    const rand = Math.random()
    let category = "common"

    if (rand > weights[0]) {
      if (rand > weights[0] + weights[1]) {
        if (rand > weights[0] + weights[1] + weights[2]) {
          category = "ultra_rare"
        } else {
          category = "very_rare"
        }
      } else {
        category = "rare"
      }
    }

    return {
      id: i,
      category,
      name: `Item ${i}`,
      value: Math.floor(Math.random() * 1000),
    }
  })
}

describe("groupBy performance benchmarks", () => {
  describe("Small dataset (100 items, 5 groups)", () => {
    const data = generateTestData(100, 5)

    bench("lodash groupBy", () => {
      lodashGroupBy(data, "category")
    })

    bench("native object groupBy", () => {
      groupByObject(data, "category")
    })

    bench("native Map groupBy", () => {
      groupBy(data, "category")
    })
  })

  describe("Medium dataset (1,000 items, 10 groups)", () => {
    const data = generateTestData(1000, 10)

    bench("lodash groupBy", () => {
      lodashGroupBy(data, "category")
    })

    bench("native object groupBy", () => {
      groupByObject(data, "category")
    })

    bench("native Map groupBy", () => {
      groupBy(data, "category")
    })
  })

  describe("Large dataset (10,000 items, 20 groups)", () => {
    const data = generateTestData(10000, 20)

    bench("lodash groupBy", () => {
      lodashGroupBy(data, "category")
    })

    bench("native object groupBy", () => {
      groupByObject(data, "category")
    })

    bench("native Map groupBy", () => {
      groupBy(data, "category")
    })
  })

  describe("Very large dataset (100,000 items, 50 groups)", () => {
    const data = generateTestData(100000, 50)

    bench("lodash groupBy", () => {
      lodashGroupBy(data, "category")
    })

    bench("native object groupBy", () => {
      groupByObject(data, "category")
    })

    bench("native Map groupBy", () => {
      groupBy(data, "category")
    })
  })

  describe("Many groups scenario (1,000 items, 500 groups)", () => {
    const data = generateTestData(1000, 500)

    bench("lodash groupBy", () => {
      lodashGroupBy(data, "category")
    })

    bench("native object groupBy", () => {
      groupByObject(data, "category")
    })

    bench("native Map groupBy", () => {
      groupBy(data, "category")
    })
  })

  describe("Skewed distribution (10,000 items, realistic distribution)", () => {
    const data = generateSkewedTestData(10000)

    bench("lodash groupBy", () => {
      lodashGroupBy(data, "category")
    })

    bench("native object groupBy", () => {
      groupByObject(data, "category")
    })

    bench("native Map groupBy", () => {
      groupBy(data, "category")
    })
  })

  describe("Single group scenario (1,000 items, 1 group)", () => {
    const data = generateTestData(1000, 1)

    bench("lodash groupBy", () => {
      lodashGroupBy(data, "category")
    })

    bench("native object groupBy", () => {
      groupByObject(data, "category")
    })

    bench("native Map groupBy", () => {
      groupBy(data, "category")
    })
  })

  describe("Edge case: numeric keys (1,000 items)", () => {
    const data = Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      priority: i % 10, // numeric key
      name: `Task ${i}`,
    }))

    bench("lodash groupBy", () => {
      lodashGroupBy(data, "priority")
    })

    bench("native object groupBy", () => {
      groupByObject(data, "priority")
    })

    bench("native Map groupBy", () => {
      groupBy(data, "priority")
    })
  })
})
