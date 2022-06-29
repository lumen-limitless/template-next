import type { NextPage } from 'next'
import Button from '../components/UI/Button'
import Container from '../components/ui/Container'
import Input from '../components/ui/Input'
import Section from '../components/ui/Section'

const Home: NextPage = () => {
  return (
    <>
      <Section fullscreen>
        <Container maxWidth="7xl">
          <Button>Button</Button>
        </Container>
      </Section>
    </>
  )
}

export default Home
