import { Container, Text } from 'nes-ui-react'
import { useState } from 'react'
import GameGrid from '../components/GameGrid'

export default function GameWrapper() {
  const [gameKey, setGameKey] = useState(1)
  return (
    <>
      <Container
        roundedCorners
        id="gameContainer"
        title="DIGIT NIBBLER"
        className="w-fit"
      >
        <GameGrid
          key={gameKey}
          reset={() => {
            setGameKey((gk) => gk + 1)
          }}
        ></GameGrid>
      </Container>
    </>
  )
}
