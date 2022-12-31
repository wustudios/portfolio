import AppBar from './AppBar'
import styled from 'styled-components'
import Logo from '../lib/Logo'
import Background from './Background'
import { useCallback, useEffect, useState } from 'react'
import Mission from './Mission'
import ContactForm from './ContactForm'

/**
 * How much scroll is required before we expand the globe
 * to be full screen.
 */
const EXPAND_SCROLL_THRESHOLD = 150

export default function Home() {
  const expandedBackground = useExpandedBackground()

  return (
    <>
      <AppBar />
      <Logo compact={expandedBackground} />
      <Background expanded={expandedBackground} />
      <Left>
        <TopSpacer />
        <Mission />
        <ContactForm />
      </Left>
    </>
  )
}

/**
 *
 */
function useExpandedBackground() {
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

  return expanded
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

const TopSpacer = styled.div`
  height: 60vh;
`

const Left = styled.div`
  max-width: 580px;
  position: absolute;
  top: 0;
  left: 15%;
`
