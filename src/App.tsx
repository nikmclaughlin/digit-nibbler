// import { useState } from 'react'
// import GameGrid from './components/GameGrid'
import {
  Badge,
  Button,
  Header,
  Heading,
  IconButton,
  List,
  Modal,
  ModalContent,
  PixelBorder,
  PixelIcon,
  Spacer,
  Text,
  Toolbar,
} from 'nes-ui-react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import useSound from 'use-sound'
import buttonDownSfx from '/dn-button-down.mp3'
import buttonUpSfx from '/dn-button-up.mp3'

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
  const [menuDialogOpen, setMenuDialogOpen] = useState(false)
  const [playButtonDown] = useSound(buttonDownSfx)
  const [playButtonUp] = useSound(buttonUpSfx)

  return (
    <main className="flex flex-col place-items-center w-screen">
      <Heading centered size="xlarge">
        DIGIT NIBBLER
      </Heading>
      <Toolbar roundedCorners className="w-[95vw]">
        <Button
          onMouseDown={() => playButtonDown()}
          onMouseUp={() => playButtonUp()}
          onClick={() => setMenuDialogOpen(true)}
        >
          <Text size="small">HOW TO PLAY</Text>
        </Button>

        <Modal backdropClose open={menuDialogOpen}>
          <Header>
            <Spacer />
            <Heading dense>INSTRUCTIONS</Heading>
            <Spacer />
            <IconButton
              color="error"
              size="small"
              onClick={() => setMenuDialogOpen(false)}
              onMouseDown={() => playButtonDown()}
              onMouseUp={() => playButtonUp()}
            >
              <PixelIcon name="pixelicon-close" size="small" />
            </IconButton>
          </Header>
          <ModalContent>
            <Heading size="large">OBJECTIVE</Heading>
            <Text>
              Nibble all the digits that align to the current board's theme.
              [WIP] So far the only game mode is "PRIMES", so only nibble the
              prime numbers!
            </Text>
            <Heading size="large">CONTROLS</Heading>
            <Text size="large">! Keyboard Required</Text>
            <List>
              <li>- Arrow keys to move </li>
              <li>- Spacebar to nibble</li>
            </List>
          </ModalContent>
        </Modal>

        <Spacer />
        {/* <ModeSelector {...setGameMode} /> */}
        <NavLink
          to={'game'}
          className={({ isActive }) => (isActive ? 'hidden' : '')}
        >
          <Button
            onMouseDown={() => playButtonDown()}
            onMouseUp={() => playButtonUp()}
          >
            <Text size="small">PRESS START</Text>
          </Button>
        </NavLink>
        <NavLink
          to={'/'}
          className={({ isActive }) => (isActive ? 'hidden' : '')}
        >
          <Button
            onMouseDown={() => playButtonDown()}
            onMouseUp={() => playButtonUp()}
          >
            MAIN MENU
          </Button>
        </NavLink>
      </Toolbar>
      <Outlet />
      <Text size="small">made with boops and ❤️ by nik</Text>
    </main>
  )
}

export default App
