import { createGlobalStyle } from 'styled-components'
import Home from './Home'
import { breakpoints, ThemeProvider } from './lib/theme'

export default function App() {
  return (
    <ThemeProvider>
      <GlobalFontSize />
      <Home />
    </ThemeProvider>
  )
}

const GlobalFontSize = createGlobalStyle`

html {
  /* 1rem Size in px */
  font-size: 12px; 
  
  @media (min-width: ${breakpoints.sm}) {
      font-size: 16px; 
  }
}
`
