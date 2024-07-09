import { IconButton, Text } from 'nes-ui-react'
import { useContext } from 'react'
import { NavLink, useRouteError } from 'react-router-dom'
import useSound from 'use-sound'
import mutedContext from './components/util/mutedContext'
import buttonDownSfx from '/dn-button-down.mp3'
import buttonUpSfx from '/dn-button-up.mp3'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  const { muted } = useContext(mutedContext)
  const [playButtonDown] = useSound(buttonDownSfx, { soundEnabled: !muted })
  const [playButtonUp] = useSound(buttonUpSfx, { soundEnabled: !muted })

  return (
    <div
      id="error-page"
      className="w-screen flex flex-col text-center place-items-center"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <NavLink to={'/'}>
        <IconButton
          color="success"
          onMouseDown={() => playButtonDown()}
          onMouseUp={() => playButtonUp()}
        >
          <Text size="small">Go Home</Text>
        </IconButton>
      </NavLink>
    </div>
  )
}
