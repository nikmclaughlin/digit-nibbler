import { Container, Heading, Text } from 'nes-ui-react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
// import ModeSelector from './components/ModeSelector'

function App() {
  /**
   * TODO
   * -[X] Spaces that can have digits
   * -[X] A 5x5 grid of Spaces
   * -[X] A random/seeded digit generator for each Space
   * -[X] The Nibbler
   * -[X] Nibbler moves between tiles
   * -[X] Nibbler eats number
   * -[X] keyboard controls (arrows move, space to nibble)
   * -[X] Movement follows grid (row/col traversal, edges)
   * -[X] Sound effects!
   * -[X] Prevent nibbling of empty tiles
   * -[ ] A menu page
   * -[ ] Some instructions
   * -[ ] Mute button
   * -[ ] Improve value generation
   * -[ ] Improve score system
   * -[x] A check to see if the level is complete
   * -[x] Generate a new level once complete
   * ===================================
   * NICE TO HAVES
   * -[ ] Multiple game modes (Multiples, Factors, Prime, Equality, Non-Equality, Challenge that changes modes each round)
   * -[ ] Time-based rewards/threats
   * -[ ] Troggles!
   * -[ ] Music & animations
   * -[ ] High score (local)
   * -[ ] mouse/touch controls (press other space to move, press current space to nibble)
   * -[ ] High score (global)
   * -[ ] Animations between rounds
   */

  // const [gameMode, setGameMode] = useState('')
  const [gameKey, setGameKey] = useState(1)

  return (
    <main className="flex flex-col place-items-center w-screen">
      <Heading centered size="xlarge">
        DIGIT NIBBLER
      </Heading>
      <Container
        roundedCorners
        id="gameContainer"
        title="DIGIT NIBBLER"
        className="w-fit"
      >
        {/* <ModeSelector {...setGameMode} /> */}
        <GameGrid
          key={gameKey}
          reset={() => {
            console.log('resetting!')
            setGameKey((gk) => gk + 1)
          }}
        ></GameGrid>
      </Container>
      <Text>made with boops and ❤️ by nik</Text>
      {/* <Text>Current Mode: {gameMode}</Text> */}
    </main>
  )
}

export default App
