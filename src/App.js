import Background from './Background'
import { H1 } from './lib/typography'
import { ThemeProvider } from 'styled-components'
import { theme } from './lib/theme'

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <H1>Hello</H1>
        <Background />
      </ThemeProvider>
    </div>
  )
}
