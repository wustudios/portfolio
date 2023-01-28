import TextField from '@mui/material/TextField'
import styled from 'styled-components'
import Box from '@mui/material/Box'
import Button from '../../lib/Button'
import Section from '../Section'
import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useState } from 'react'
import { colors } from '../../lib/theme'
import { AnimatePresence, motion } from 'framer-motion'
import CheckAnimation from './CheckAnimation'

const FORM_NAME = 'contact'

export default function ContactForm() {
  return (
    <Section id="contact">
      <Content />
    </Section>
  )
}

function Content() {
  const { register, handleSubmit } = useForm()
  const containerRef = useRef()
  const [submissionFailed, setSubmissionFailed] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  const submit = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlEncode({
        'form-name': FORM_NAME,
        ...data,
      }),
    }).then((res) => {
      const failed = res.status > 299
      if (failed) {
        setSubmissionFailed(true)
      } else {
        setMessageSent(true)
      }
    })
  }

  if (messageSent) {
    return (
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{
          type: 'tween',
          duration: 0.3,
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.85 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{
            type: 'spring',
            bounce: 0.45,
            duration: 0.5,
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <SubmittedMessage>
            <SubmittedTitle>
              <CheckAnimation />
              <h2>Message sent</h2>
            </SubmittedTitle>
            <p>Thank you for reaching out. We'll be in touch shortly.</p>
          </SubmittedMessage>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div>
      <h2>Get in touch</h2>
      <div ref={containerRef} />
      <p>
        Have an idea in mind? Send us a message. We'd love to hear from you.
      </p>
      <form onSubmit={handleSubmit(submit)}>
        <Box mb={1}>
          <TextField
            variant="outlined"
            placeholder="Your Name"
            fullWidth
            {...register('name')}
          />
        </Box>
        <Box mb={1}>
          <TextField
            variant="outlined"
            placeholder="Your Email"
            fullWidth
            {...register('email')}
          />
        </Box>
        <Box mb={1}>
          <TextField
            variant="outlined"
            multiline
            fullWidth
            rows={5}
            placeholder="Your Message"
            {...register('message')}
          />
        </Box>
        <Button size="large" fullWidth type="submit">
          Send
        </Button>
        <AnimatePresence>
          {submissionFailed && (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{
                type: 'tween',
                duration: 0.3,
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <SubmissionError>
                Server error.
                <br /> Please try again, or send me an email directly at
                {` `}
                <a href="mailto:mike@wu.studio">mike@wu.studio</a>
              </SubmissionError>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}

function urlEncode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const SubmissionError = styled.div`
  background: ${colors.error};
  color: #000000;
  border-radius: 24px;
  padding: 1rem;
  margin-top: 1rem;
`

const SubmittedMessage = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  h2 {
    margin-bottom: 0;
  }
`

const SubmittedTitle = styled.div`
  position: relative;
`
