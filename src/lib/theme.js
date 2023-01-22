import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'

export const colors = {
  brand: '#bdff00',
  error: '#ff4466',
  background: '#181818',
  text: {
    primary: '#D7D7D7',
  },
  overlay: 'rgba(58, 58, 58, 0.48)',
  accordion: {
    border: '#5C5A5A',
  },
}

export const breakpoints = {
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
}

const muiTheme = createTheme({
  typography: {
    fontFamily: ['IBM Plex Mono', 'arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: colors.brand,
    },
    text: {
      primary: '#FFFFFF',
    },
    error: {
      main: colors.error,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '1.125rem',
          lineHeight: '1.375rem',
          backgroundColor: 'rgba(58, 58, 58, 0.48)',
          borderRadius: '32px',
          '&:not(.Mui-error):hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.brand,
          },
          '&.Mui-focused': {
            color: colors.brand,
          },
          '.MuiInputBase-inputMultiline': {
            padding: '0px 6px 16px',
          },
        },
        input: {
          padding: '14px 20px 16px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          fontSize: '1.625rem',
          textTransform: 'none',
          fontWeight: 300,
          borderBottom: `2px solid ${colors.overlay}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&.MuiButton-containedSizeLarge': {
            padding: '16px 32px',
            fontSize: '1.125rem',
            borderRadius: '100px',
          },
          '&.MuiButton-textPrimary': {
            color: colors.text.primary,
          },
          '&.MuiButton-text:hover': {
            backgroundColor: 'transparent', // Disable background box on hover
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          borderRadius: '0!important',
          borderTop: `1px solid ${colors.accordion.border}`,

          '&:last-child': {
            borderBottom: `1px solid ${colors.accordion.border}`,
          },
        },
      },
    },
  },
})

export const theme = {
  colors,
}

export function ThemeProvider({ children }) {
  return (
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </StyledThemeProvider>
  )
}
