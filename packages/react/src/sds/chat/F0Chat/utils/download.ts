/** Programmatically download a remote file under a given name (no navigation). */
export const triggerDownload = (url: string, name: string): void => {
  const a = document.createElement("a")
  a.href = url
  a.download = name
  a.rel = "noreferrer"
  a.click()
}
