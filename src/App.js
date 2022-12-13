import Background from './Background'
import { ThemeProvider } from 'styled-components'
import { theme } from './lib/theme'

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <h1>Hello</h1>
        <Background />
      </ThemeProvider>
    </div>
  )
}
