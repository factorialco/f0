export type OneModalFooterProps = {
  children: React.ReactNode
}

export const OneModalFooter = ({ children }: OneModalFooterProps) => {
  return (
    <div className="flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-4 py-3">
      {children}
    </div>
  )
}
