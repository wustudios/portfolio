import Routes from './Routes'
import { ThemeProvider } from './lib/theme'

export default function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}
