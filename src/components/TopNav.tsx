import {
  Button,
  Header,
  Heading,
  IconButton,
  List,
  Modal,
  ModalContent,
  PixelIcon,
  Spacer,
  Text,
  Toolbar,
} from 'nes-ui-react'
import { MouseEvent, useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import useSound from 'use-sound'
import mutedContext from './util/mutedContext'
import buttonDownSfx from '/dn-button-down.mp3'
import buttonUpSfx from '/dn-button-up.mp3'

export default function TopNav() {
  const [menuDialogOpen, setMenuDialogOpen] = useState(false)
  const { muted, setMuted } = useContext(mutedContext)
  const [playButtonDown] = useSound(buttonDownSfx, { soundEnabled: !muted })
  const [playButtonUp] = useSound(buttonUpSfx, { soundEnabled: !muted })

  const handleMuteClick = (e: MouseEvent<HTMLElement>) => {
    console.log('clicked mute')
    e.currentTarget.blur()
    setMuted()
  }

  return (
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
            Nibble all the digits that align to the current board's theme. [WIP]
            So far the only game mode is "PRIMES", so only nibble the prime
            numbers!
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
      <Button onClick={(e) => handleMuteClick(e)}>
        {muted ? 'UNMUTE' : 'MUTE'}
      </Button>
      {/* <ModeSelector {...setGameMode} /> */}
      <NavLink
        to={'game'}
        className={({ isActive }) => (isActive ? 'hidden' : '')}
      >
        <Button
          onMouseDown={() => playButtonDown()}
          onMouseUp={() => playButtonUp()}
          color="success"
        >
          <Text size="small">PRESS START</Text>
        </Button>
      </NavLink>
      <NavLink
        to={'/'}
        className={({ isActive }) => (isActive ? 'hidden' : '')}
      >
        <Button
          color="error"
          onMouseDown={() => playButtonDown()}
          onMouseUp={() => playButtonUp()}
        >
          MAIN MENU
        </Button>
      </NavLink>
    </Toolbar>
  )
}
