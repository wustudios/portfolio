import Background from './Background'
import styled from 'styled-components'
import { ThemeProvider } from './lib/theme'
import { ReactComponent as Logo } from './assets/logo-horizontal.svg'

export default function App() {
  return (
    <ThemeProvider>
      <Background />
      <Left>
        <Section>
          <StyledLogo />
        </Section>
        <p>
          A software development studio helping clients make the world a
          smaller, kinder place. We specialize in making complex software
          amazingly simple.
        </p>
        <Section>
          <p>
            It all starts with your idea. We then begin to discover the
            assumptions, solutions, and evaluations with you. Next, we'll start
            looking for the right tech stack.
          </p>
        </Section>
        <Section>
          <p>
            We believe in using the right tool for the job, and are usually tech
            agnostic. That said, these are some of our favorite tools:
          </p>
        </Section>
      </Left>
    </ThemeProvider>
  )
}

const StyledLogo = styled(Logo)`
  width: 400px;
`

const Left = styled.div`
  max-width: 580px;
  position: absolute;
  top: 0;
  left: 15%;
`

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`
