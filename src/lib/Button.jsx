import MuiButton from '@mui/material/Button'

export default function Button(props) {
  return (
    <MuiButton variant="contained" disableRipple disableElevation {...props} />
  )
}
