import Background from './Background'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { theme } from './lib/theme'
import { ReactComponent as Logo } from './assets/logo-horizontal.svg'

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Left>
          <StyledLogo />
          <p>
            A software development studio helping clients make the world a
            smaller, kinder place. We specialize in making complex software
            amazingly simple.
          </p>
          <Section>
            <p>
              It all starts with your idea. We then begin to discover the
              assumptions, solutions, and evaluations with you. Next, we'll
              start looking for the right tech stack.
            </p>
          </Section>
          <Section>
            <p>
              We believe in using the right tool for the job, and are usually
              tech agnostic. That said, these are some of our favorite tools:
            </p>
          </Section>
        </Left>
        <Background />
      </ThemeProvider>
    </div>
  )
}

const StyledLogo = styled(Logo)`
  width: 100%;
`

const Left = styled.div`
  max-width: 580px;
  position: absolute;
  top: 30%;
  left: 8%;
`

const Section = styled.div`
  margin-top: 200px;
`
