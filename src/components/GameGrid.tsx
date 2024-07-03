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
      <Button
        className="border-2 border-black bg-slate-200"
        onClick={() => setPlayerPosition(playerPosition + 1)}
      >
        Pos +1
      </Button>
    </>
  )
}
