import { Container, Heading, Hero, Text } from 'nes-ui-react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import ModeSelector from './components/ModeSelector'

function App() {
  /**
   * TODO
   * -[X] Spaces that can have digits
   * -[X] A 5x5 grid of Spaces
   * -[X] A random/seeded digit generator for each Space
   * -[X] The Nibbler
   * -[X] Nibbler moves between tiles
   * -[x] Nibbler eats number
   * -[x] keyboard controls (arrows move, space to nibble)
   * -[x] Movement follows grid (row/col traversal, edges)
   * -[ ] Improve value generation
   * -[ ] A score system
   * -[ ] A check to see if the level is complete
   * -[ ] Generate a new level once complete
   * -[ ] Some instructions
   * ===================================
   * NICE TO HAVES
   * -[ ] Multiple game modes (Multiples, Factors, Prime, Equality, Non-Equality, Challenge that changes modes each round)
   * -[ ] Troggles!
   * -[ ] A menu system (Main, mode select, enter scores)
   * -[ ] High score (local)
   * -[ ] mouse/touch controls (press other space to move, press current space to nibble)
   * -[ ] High score (global)
   * -[ ] Animations between rounds
   */

  const [gameMode, setGameMode] = useState('')

  return (
    <main>
      <Heading size="xlarge">DIGIT NIBBLER</Heading>
      <Container id="gameContainer" title="DIGIT NIBBLER" className="w-fit">
        {/* <ModeSelector {...setGameMode} /> */}
        <GameGrid></GameGrid>
      </Container>
      <Text>🥳 App successfully hosted.</Text>
      <Text>Current Mode: {gameMode}</Text>
    </main>
  )
}

export default App
