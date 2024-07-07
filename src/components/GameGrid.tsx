// import { Button } from '@aws-amplify/ui-react'
import { Container, Text } from 'nes-ui-react'
import { useCallback, useEffect, useState } from 'react'
import { useKeyPressed } from '../hooks/useKeyPressed'
import GridTile from './GridTile'

export default function GameGrid() {
  const BOARD_SIZE = 25
  const gridTiles = Array.from({ length: BOARD_SIZE }, (_, index) => index)
  const leftEdge = [0, 5, 10, 15, 20]
  const rightEdge = [4, 9, 14, 19, 24]

  const upPress = useKeyPressed('ArrowUp')
  const rightPress = useKeyPressed('ArrowRight')
  const downPress = useKeyPressed('ArrowDown')
  const leftPress = useKeyPressed('ArrowLeft')
  const spacePress = useKeyPressed(' ')

  // Initialize game board
  const initialValues = Array.from({ length: BOARD_SIZE }, () =>
    Math.ceil(Math.random() * 10)
  )

  const [playerPosition, setPlayerPosition] = useState(0)
  const [gridValues, setGridValues] = useState(initialValues)
  const [score, setScore] = useState(0)

  const nibbleDigit = useCallback(
    ({ position, values }: { position: number; values: Array<number> }) => {
      setScore((score) => score + values[position])
      setGridValues((values) =>
        values.map((val, i) => {
          if (i === position) {
            return 0
          } else {
            return val
          }
        })
      )
    },
    []
  )

  useEffect(() => {
    let newP = playerPosition
    if (upPress && newP >= 5) {
      newP -= 5
    } else if (rightPress && !rightEdge.includes(newP)) {
      newP += 1
    } else if (downPress && newP < 20) {
      newP += 5
    } else if (leftPress && !leftEdge.includes(newP)) {
      newP -= 1
    } else if (spacePress) {
      nibbleDigit({ position: newP, values: gridValues })
    }
    setPlayerPosition(newP)
    // have to exclude playerPosition from deps to prevent infinite loop, but need position to nibble :\ - probably not doing this right
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downPress, leftPress, nibbleDigit, rightPress, spacePress, upPress])

  return (
    <div>
      <Container className="w-fit">
        <Text size="xlarge">Score: {score}</Text>
      </Container>
      <div className="grid grid-cols-5 gap-x-0">
        {gridTiles.map((i) => (
          <GridTile
            key={i}
            value={gridValues[i]}
            hasPlayer={i === playerPosition}
          />
        ))}
      </div>
      {/* <Button
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
      </Button> */}
    </div>
  )
}
