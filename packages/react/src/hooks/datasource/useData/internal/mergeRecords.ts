import { RecordType } from "../../types"

/**
 * Merges 2 arrays of items using the idProvider to update the existing items
 * and add the new items
 */
export const mergeRecords = <R extends RecordType>(
  prevData: R[],
  newData: R[],
  idProvider: (item: R, index?: number) => string | number | symbol
): R[] => {
  {
    // The Map order is guaranteed to be the same as the order of the items in the array. Check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps
    const idMap = new Map(
      prevData.map((item, index) => [idProvider(item, index), item])
    )

    for (const [index, record] of newData.entries()) {
      const id = idProvider(record, index)
      idMap.set(id, record)
    }

    return Array.from(idMap.values())
  }
}
