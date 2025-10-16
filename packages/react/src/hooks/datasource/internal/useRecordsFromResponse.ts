import { useState } from "react"
import { RecordType } from "../types"

export const useRecordsFromResponse = <R extends RecordType>() => {
  const [chunks, setChunks] = useState<Map<string, R[]>>(new Map())

  console.log("chunks2---->", chunks)

  return {
    getRecordsFromResponse,
  }
}
