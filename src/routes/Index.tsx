import { Container, Text } from 'nes-ui-react'

export default function Index() {
  return (
    <>
      <Container
        roundedCorners
        title="MAIN MENU"
        alignTitle="left"
        className="w-fit"
      >
        <img src="/main-menu.svg"></img>
        <Text centered size="large">
          A loving tribute to MECC's 1990 edutainment classic, Number Munchers,
          created for LWJ's Web Dev Challenge.
        </Text>
      </Container>
    </>
  )
}
