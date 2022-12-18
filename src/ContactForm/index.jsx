import Logo from '../lib/Logo'
import TextField from '@mui/material/TextField'

export default function ContactForm() {
  return (
    <>
      <Logo compact />

      <h2>Get in touch</h2>
      <TextField variant="outlined" placeholder="Name" />
      <TextField variant="outlined" multiline rows={5} />
      <TextField
        variant="outlined"
        placeholder="Name"
        error
        helperText="some error occurred"
      />
    </>
  )
}
