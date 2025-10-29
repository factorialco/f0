export const useCoCreationBlocks = () => {
  const [blocks, setBlocks] = useState<CoCreationBlock[]>([])

  return {
    blocks,
    setBlocks,
  }
}
