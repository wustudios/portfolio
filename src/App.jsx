import Home from './Home'
import { ThemeProvider } from './lib/theme'

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}
