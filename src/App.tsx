import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GridContainer from './layout/GridContainer/GridContainer'
import Section from './layout/Section/Section'
import Card from './components/Card/Card'
import Container from './layout/Container/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Section>
      <Container>
        <GridContainer>
            <Card
                title="Card Title"
                description="Card Description"
            />
            <Card
                title="Card Title"
                description="Card Description"
            />
            <Card
                title="Card Title"
                description="Card Description"
            />
        </GridContainer>
      </Container>
    </Section>
    <Section>
      <Container>
        <GridContainer>
            <Card
                title="Card Title"
                description="Card Description"
            />
            <Card
                title="Card Title"
                description="Card Description"
            />
            <Card
                title="Card Title"
                description="Card Description"
            />
        </GridContainer>
      </Container>
    </Section>
    <Section>
      <Container>
        <GridContainer>
            <Card
                title="Card Title"
                description="Card Description"
            />
            <Card
                title="Card Title"
                description="Card Description"
            />
            <Card
                title="Card Title"
                description="Card Description"
            />
        </GridContainer>
      </Container>
    </Section>
    </>
  )
}

export default App
