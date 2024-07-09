import { useCallback, useEffect, useState } from 'react'

export function useKeyPressed(targetKey: string) {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault()
      const { key } = e
      if (key === targetKey) {
        setKeyPressed(true)
      }
    },
    [targetKey]
  )

  const upHandler = useCallback(
    (e: KeyboardEvent) => {
      const { key } = e
      e.preventDefault()
      if (key === targetKey) {
        setKeyPressed(false)
      }
    },
    [targetKey]
  )

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [downHandler, upHandler])

  return keyPressed
}
