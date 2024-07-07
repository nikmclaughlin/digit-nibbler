import { Container, Text } from 'nes-ui-react'
import Nibbler from './Nibbler'

export default function GridTile({ hasPlayer = false, value = 0 }) {
  return (
    <>
      <Container align="center" className="h-24 w-24 content-center">
        {hasPlayer && <Nibbler />}
        <Text size="large" className="h-4">
          {value || ''}
        </Text>
      </Container>
    </>
  )
}
