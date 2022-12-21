import Logo from '../../lib/Logo'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'
import Page from '..'

export default function ContactForm() {
  return (
    <Page>
      <Link to="/">
        <Logo compact />
      </Link>
      <h2>Get in touch</h2>
      <TextField variant="outlined" placeholder="Name" />
      <TextField variant="outlined" multiline rows={5} />
      <TextField
        variant="outlined"
        placeholder="Name"
        error
        helperText="some error occurred"
      />
    </Page>
  )
}
