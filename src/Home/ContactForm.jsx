import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '../lib/Button'
import Section from './Section'

export default function ContactForm() {
  return (
    <Section id="contact">
      <div>
        <h2>Get in touch</h2>
        <p>
          Have an idea in mind? Send us a message. We'd love to hear from you.
        </p>
        <Box mb={1}>
          <TextField variant="outlined" placeholder="Your Name" fullWidth />
        </Box>
        <Box mb={1}>
          <TextField variant="outlined" placeholder="Your Email" fullWidth />
        </Box>
        <Box mb={1}>
          <TextField
            variant="outlined"
            multiline
            fullWidth
            rows={5}
            placeholder="Your Message"
          />
        </Box>
        <Button size="large" fullWidth>
          Send
        </Button>
      </div>
    </Section>
  )
}
