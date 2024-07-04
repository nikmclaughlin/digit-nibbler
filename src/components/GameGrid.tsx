import { Button } from '@aws-amplify/ui-react'
import { useEffect, useState } from 'react'
import GridTile from './GridTile'

export default function GameGrid() {
  const BOARD_SIZE = 25
  const gridTiles = Array.from({ length: BOARD_SIZE }, (_, index) => index)
  const numberSeed = Array.from({ length: BOARD_SIZE }, (_, _index) =>
    Math.ceil(Math.random() * 10)
  )

  const [playerPosition, setPlayerPosition] = useState(0)
  const [gridValues, setGridValues] = useState(numberSeed)
  const [score, setScore] = useState(0)

  const nibbleDigit = (position: number) => {
    setScore(score + gridValues[position])
    gridValues[position] = 0
  }

  useEffect(() => {
    console.log(playerPosition)
  }, [playerPosition])

  return (
    <>
      <p>Score: {score}</p>
      <div className="grid grid-cols-5 gap-x-0">
        {gridTiles.map((i) => (
          <GridTile
            key={i}
            value={gridValues[i]}
            hasPlayer={i === playerPosition}
          />
        ))}
      </div>
      <Button
        className="border-2 border-black bg-slate-200"
        onClick={() => setPlayerPosition((p) => p + 1)}
      >
        Pos +1
      </Button>
      <Button
        className="border-2 border-black bg-slate-200"
        onClick={() => nibbleDigit(playerPosition)}
      >
        EAT
      </Button>
    </>
  )
}
