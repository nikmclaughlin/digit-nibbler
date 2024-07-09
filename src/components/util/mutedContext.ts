import { createContext } from 'react'

const mutedContext = createContext({
  muted: false,
  setMuted: () => {},
})
export default mutedContext
