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
        <img src="/main-menu.svg" width={800} className="m-auto"></img>
        <Text centered size="large">
          A loving tribute to MECC's{' '}
          <a className="" href="https://www.mecc.co/" target="_blank">
            (ref)
          </a>{' '}
          1990 edu-tainment classic, Number Munchers, created for LWJ's Web Dev
          Challenge.
        </Text>
      </Container>
    </>
  )
}
