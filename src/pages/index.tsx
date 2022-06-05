import type { NextPage } from 'next'
import Button from '../components/Button'
import Container from '../components/Container'
import Input from '../components/Input'
import Section from '../components/Section'

const Home: NextPage = () => {
  return (
    <>
      <Section fullscreen>
        <Container maxWidth="7xl">
          <Button>Button</Button>
          <Input label="Input" placeholder="Input"></Input>
        </Container>
      </Section>
    </>
  )
}

export default Home
