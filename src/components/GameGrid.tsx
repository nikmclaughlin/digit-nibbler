import { Button } from '@aws-amplify/ui-react'
import { useEffect, useState } from 'react'
import GridTile from './GridTile'

export default function GameGrid() {
  const BOARD_SIZE = 25
  const gridTiles = Array.from({ length: BOARD_SIZE }, (_, index) => index)
  const initialValues = Array.from({ length: BOARD_SIZE }, (_, _index) =>
    Math.ceil(Math.random() * 10)
  )

  const [playerPosition, setPlayerPosition] = useState(0)
  const [gridValues, setGridValues] = useState(initialValues)
  const [score, setScore] = useState(0)

  const handleKeyDown = (e) => {
    let newP = playerPosition
    switch (e.key) {
      case 'ArrowUp':
        newP -= 5
        break
      case 'ArrowRight':
        newP += 1
        break
      case 'ArrowDown':
        newP += 5
        break
      case 'ArrowLeft':
        newP -= 1
        break
      case ' ':
        nibbleDigit(playerPosition)
        break
    }
    setPlayerPosition(newP)
  }
  document.addEventListener('keydown', handleKeyDown, { once: true })

  const nibbleDigit = (position: number) => {
    setScore(score + gridValues[position])
    const nextValues = gridValues.map((val, i) => {
      if (i === position) {
        return 0
      } else {
        return val
      }
    })
    setGridValues(nextValues)
  }

  return (
    <div>
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
    </div>
  )
}
