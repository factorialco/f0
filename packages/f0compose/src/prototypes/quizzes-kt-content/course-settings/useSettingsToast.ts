import { useState, useEffect, useCallback } from "react"

export function useSettingsToast() {
  const [message, setMessage] = useState<string | null>(null)

  const show = useCallback((msg: string) => setMessage(msg), [])
  const dismiss = useCallback(() => setMessage(null), [])

  useEffect(() => {
    if (!message) return
    const t = setTimeout(dismiss, 3000)
    return () => clearTimeout(t)
  }, [message, dismiss])

  return { message, show, dismiss }
}
