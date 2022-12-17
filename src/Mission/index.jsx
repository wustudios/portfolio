import Background from './Background'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../assets/logo-horizontal.svg'
import { useCallback, useEffect, useState } from 'react'

/**
 * How much scroll is required before we expand the globe
 * to be full screen.
 */
const EXPAND_SCROLL_THRESHOLD = 150

export default function Mission() {
  const scrollPosition = useScrollPosition()
  const [expanded, setExpanded] = useState(false)

  // Set planet expand state depending on scroll amount
  useEffect(() => {
    const shouldExpand = scrollPosition > EXPAND_SCROLL_THRESHOLD
    if (shouldExpand && !expanded) {
      setExpanded(true)
      return
    }

    if (!shouldExpand && expanded) {
      setExpanded(false)
      return
    }
  }, [scrollPosition, expanded])

  return (
    <>
      <Background expanded={expanded} />
      <StyledLogo compact={expanded} />
      <Left>
        <TopSpacer />
        <p>
          A software development studio helping clients make the world a
          smaller, kinder place. We specialize in making complex software
          amazingly simple.
        </p>
        <Section>
          <p>
            It all starts with your idea. We then begin to discover the
            assumptions, solutions, and evaluations with you. Next, we'll start
            looking for the right tech stack.
          </p>
        </Section>
        <Section>
          <p>
            We believe in using the right tool for the job, and are usually tech
            agnostic. That said, these are some of our favorite tools:
          </p>
        </Section>
        <Section>
          <p>
            Have an idea in mind? Send us a message. We'd love to hear from you.
          </p>
        </Section>
      </Left>
    </>
  )
}

function useScrollPosition() {
  const [position, setPosition] = useState(0)
  const calculate = useCallback(() => {
    const position = window.pageYOffset
    setPosition(position)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', calculate, {
      // Set 'passive' to true for faster scroll handling.
      // reference: https://stackoverflow.com/questions/37721782/what-are-passive-event-listeners
      passive: true,
    })
    window.addEventListener('load', calculate)

    return () => {
      window.removeEventListener('scroll', calculate)
      window.removeEventListener('load', calculate)
    }
  }, [calculate])

  return position
}

const StyledLogo = styled(Logo)`
  position: fixed;
  top: ${(props) => (props.compact ? '32px' : '50%')};
  width: ${(props) => (props.compact ? '150px' : '400px')};
  left: ${(props) => (props.compact ? '32px' : '15%')};

   {
    /* Apply a transform of -50% to account for logo height, and have it actually be centered vertically. */
  }
  transform: ${(props) =>
    props.compact ? 'translate(0,0)' : 'translate(0, -50%)'};

  transition: all 275ms ease-in;
`

const Left = styled.div`
  max-width: 580px;
  position: absolute;
  top: 0;
  left: 15%;
`

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`

const TopSpacer = styled.div`
  height: 125vh;
`
