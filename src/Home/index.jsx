import AppBar from './AppBar'
import React from 'react'
import styled from 'styled-components'
import Logo from '../lib/Logo'
import Background from './Background'
import { useCallback, useEffect, useState } from 'react'
import Mission from './Mission'
import Content from './Content'
import Work from './Work'
import ContactForm from './ContactForm'

/**
 * Sections a user can click to navigate to.
 */
export const MISSION = 'mission'
export const WORK = 'work'
export const CONTACT = 'contact'

const SectionContext = React.createContext()

/**
 * How much scroll is required before we expand the globe
 * to be full screen.
 */
const EXPAND_SCROLL_THRESHOLD = 150

export default function Home() {
  const expandedBackground = useExpandedBackground()

  const [section, setSection] = useState('mission')

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      <AppBar />
      <Logo compact={expandedBackground} />
      <Background expanded={expandedBackground} />
      <Content>
        <TopSpacer />
        <Mission />
      </Content>
      <Work />
      <Content>
        <ContactForm />
      </Content>
    </SectionContext.Provider>
  )
}

export function useSection() {
  const context = React.useContext(SectionContext)
  if (context === undefined) {
    throw new Error(`useSection must be used within a SectionProvider`)
  }

  return context
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
