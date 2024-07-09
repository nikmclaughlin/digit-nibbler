import { Heading, Text } from 'nes-ui-react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from './components/TopNav'
import mutedContext from './components/util/mutedContext'

// import ModeSelector from './components/ModeSelector'

function App() {
  // const [gameMode, setGameMode] = useState('')
  const [muted, setMuted] = useState(false)

  return (
    <main className="flex flex-col place-items-center w-screen">
      <mutedContext.Provider
        value={{
          muted: muted,
          setMuted: () =>
            setMuted((state) => {
              console.log('toggling mute')
              return !state
            }),
        }}
      >
        <Heading centered size="xlarge">
          DIGIT NIBBLER
        </Heading>
        <TopNav />
        <Outlet />
        <Text size="small">
          made with boops and ❤️ by <a href="https://nikmclaughlin.com">nik</a>
        </Text>
      </mutedContext.Provider>
    </main>
  )
}

export default App
