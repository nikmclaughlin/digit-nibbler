import { Button } from '@aws-amplify/ui-react'
import { useEffect, useState } from 'react'
import GridTile from './GridTile'
// import Nibbler from "./Nibbler";

export default function GameGrid() {
  const BOARD_SIZE = 25
  const gridTiles = Array.from({ length: BOARD_SIZE }, (_, index) => index)
  const [playerPosition, setPlayerPosition] = useState(0)

  useEffect(() => {
    console.log(playerPosition)
  }, [playerPosition])

  return (
    <>
      <div className="grid grid-cols-5 gap-x-0">
        {gridTiles.map((i) => (
          <GridTile key={i} hasPlayer={i === playerPosition} />
        ))}
      </div>
      <p>GRID HTML</p>
      <Button onClick={() => setPlayerPosition(playerPosition + 1)}>
        BUTTON!
      </Button>
    </>
  )
}
