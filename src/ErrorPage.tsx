import { IconButton, Text } from 'nes-ui-react'
import { useRouteError } from 'react-router-dom'
import useSound from 'use-sound'
import buttonDownSfx from '/dn-button-down.mp3'
import buttonUpSfx from '/dn-button-up.mp3'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  const [playButtonDown] = useSound(buttonDownSfx)
  const [playButtonUp] = useSound(buttonUpSfx)

  return (
    <div
      id="error-page"
      className="w-screen flex flex-col text-center place-items-center"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <IconButton
        color="success"
        onMouseDown={() => playButtonDown()}
        onMouseUp={() => playButtonUp()}
        onClick={() => {
          console.log('rerouting')
          //   route to root
        }}
      >
        <Text size="small">Go Home</Text>
      </IconButton>
    </div>
  )
}
