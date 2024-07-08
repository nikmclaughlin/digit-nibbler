// import { Button } from '@aws-amplify/ui-react'
import {
  Container,
  Footer,
  Header,
  Heading,
  IconButton,
  Modal,
  ModalContent,
  PixelIcon,
  Spacer,
  Text,
} from 'nes-ui-react'
import { useCallback, useEffect, useState } from 'react'
import useSound from 'use-sound'
import { useKeyPressed } from '../hooks/useKeyPressed'
import GridTile from './GridTile'
import { isPrime, primeComplete } from './util/rules'
import buttonDownSfx from '/dn-button-down.mp3'
import buttonUpSfx from '/dn-button-up.mp3'
import defeatSfx from '/dn-lose.mp3'
import ouchSfx from '/dn-ouch.mp3'
import victorySfx from '/dn-win.mp3'
import yumSfx from '/dn-yum.mp3'
// import VictoryModal from './victoryModal'

type GameGridProps = {
  reset: () => void
}

export default function GameGrid({ reset }: GameGridProps) {
  const BOARD_SIZE = 25
  const gridTiles = Array.from({ length: BOARD_SIZE }, (_, index) => index)
  const leftEdge = [0, 5, 10, 15, 20]
  const rightEdge = [4, 9, 14, 19, 24]

  // Keyboad controls
  const upPress = useKeyPressed('ArrowUp')
  const rightPress = useKeyPressed('ArrowRight')
  const downPress = useKeyPressed('ArrowDown')
  const leftPress = useKeyPressed('ArrowLeft')
  const spacePress = useKeyPressed(' ')

  // SFX
  const [playOuch] = useSound(ouchSfx)
  const [playYum] = useSound(yumSfx)
  const [playDefeat] = useSound(defeatSfx)
  const [playVictory] = useSound(victorySfx)
  const [playButtonDown] = useSound(buttonDownSfx, { volume: 1 })
  const [playButtonUp] = useSound(buttonUpSfx, { volume: 1 })

  // Initialize game board
  const initialValues = Array.from({ length: BOARD_SIZE }, () =>
    // Prime will do rando 1-10
    Math.ceil(Math.random() * 10)
  )

  // State city
  const [playerPosition, setPlayerPosition] = useState(0)
  const [gridValues, setGridValues] = useState(initialValues)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [victoryModalOpen, setVictoryModalOpen] = useState(false)
  const [defeatModalOpen, setDefeatModalOpen] = useState(false)

  // Nibble handling
  const nibbleDigit = useCallback(
    ({ position, values }: { position: number; values: Array<number> }) => {
      if (isPrime(values[position])) {
        playYum()
        setScore((score) => score + values[position])
      } else {
        playOuch()
        setScore((score) => score - 5)
        setLives((lives) => lives - 1)
        // alert(`${values[position]} is not a Prime number!`)
      }
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
    [playOuch, playYum]
  )

  // Victory conditions
  useEffect(() => {
    if (primeComplete(gridValues)) {
      playVictory()
      setVictoryModalOpen(true)
    }
  }, [gridValues, playVictory])

  // Defeat conditions
  useEffect(() => {
    if (lives === 0) {
      playDefeat()
      setDefeatModalOpen(true)
    }
  }, [lives, playDefeat])

  // Player controls
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
    } else if (spacePress && gridValues[newP] !== 0) {
      nibbleDigit({ position: newP, values: gridValues })
    }
    setPlayerPosition(newP)
    // have to exclude playerPosition from deps to prevent infinite loop, but need position to nibble :\ - probably not doing this right
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downPress, leftPress, nibbleDigit, rightPress, spacePress, upPress])

  function renderLives(lives: number) {
    const arr = []
    for (let i = 0; i < lives; i++) {
      arr.push(<Text key={i}>♥️</Text>)
    }
    return arr
  }

  return (
    <div>
      {/* <VictoryModal
        isOpen={victoryModalOpen}
        onClose={() => setVictoryModalOpen(false)}
      /> */}
      <Modal
        open={victoryModalOpen}
        onClose={() => {
          setVictoryModalOpen(false)
          reset()
        }}
      >
        <Header>
          <Spacer />
          <Heading dense>You Win!</Heading>
          <Spacer />
        </Header>
        <ModalContent className="text-center">
          Congratulations! You nibbled all the right digits!
        </ModalContent>
        <Footer>
          <IconButton
            color="success"
            onMouseDown={() => playButtonDown()}
            onMouseUp={() => playButtonUp()}
            onClick={() => {
              setVictoryModalOpen(false)
              reset()
            }}
          >
            <Text size="small">Play again</Text>
            <PixelIcon name="pixelicon-checkmark" size="small" />
          </IconButton>
        </Footer>
      </Modal>

      <Modal
        open={defeatModalOpen}
        onClose={() => {
          setDefeatModalOpen(false)
          reset()
        }}
      >
        <Header>
          <Spacer />
          <Heading dense>GAME OVER</Heading>
          <Spacer />
        </Header>
        <ModalContent className="text-center">
          Your digital nibbling days are done.
        </ModalContent>
        <Footer>
          <IconButton
            color="error"
            onMouseDown={() => playButtonDown()}
            onMouseUp={() => playButtonUp()}
            onClick={() => {
              setDefeatModalOpen(false)
              reset()
            }}
          >
            <Text size="small">Play again</Text>
            <PixelIcon name="pixelicon-checkmark" size="small" />
          </IconButton>
        </Footer>
      </Modal>

      <div className="flex place-content-between">
        <Container className="w-fit">
          <Text size="xlarge">Score: {score}</Text>
        </Container>
        <div className="flex gap-1">Lives: {renderLives(lives)}</div>
      </div>
      <Heading>PRIME: Nibble all of the prime numbers</Heading>
      <Text>Arrows to move, spacebar to nibble</Text>
      <div className="grid grid-cols-5 gap-x-0">
        {gridTiles.map((i) => (
          <GridTile
            key={i}
            value={gridValues[i]}
            hasPlayer={i === playerPosition}
          />
        ))}
      </div>
    </div>
  )
}
