import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '../lib/Button'
import Section from './Section'
import { useForm } from 'react-hook-form'

const FORM_NAME = 'contact'

export default function ContactForm() {
  const { register, handleSubmit } = useForm()

  const submit = (data) => {
    console.log(data)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlEncode({
        'form-name': FORM_NAME,
        ...data,
      }),
    }).then(() => {
      console.log('submitted!')
    })
  }
  return (
    <Section id="contact">
      <div>
        <h2>Get in touch</h2>
        <p>
          Have an idea in mind? Send us a message. We'd love to hear from you.
        </p>
        <form onSubmit={handleSubmit(submit)}>
          <Box mb={1}>
            <TextField
              variant="outlined"
              placeholder="Your Name"
              fullWidth
              name="name"
              inputProps={{
                ref: register,
              }}
            />
          </Box>
          <Box mb={1}>
            <TextField
              variant="outlined"
              placeholder="Your Email"
              fullWidth
              name="email"
              inputProps={{
                ref: register,
              }}
            />
          </Box>
          <Box mb={1}>
            <TextField
              variant="outlined"
              multiline
              fullWidth
              rows={5}
              placeholder="Your Message"
              name="message"
              inputProps={{
                ref: register,
              }}
            />
          </Box>
          <Button size="large" fullWidth type="submit">
            Send
          </Button>
        </form>
      </div>
    </Section>
  )
}

function urlEncode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
