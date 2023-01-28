import Lottie from 'lottie-web'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useRef } from 'react'
import checkAnimation from './check-animation.json'

export default function CheckAnimation() {
  const elRef = useRef()
  const loadedRef = useRef(false)

  useEffect(() => {
    if (!elRef.current || loadedRef.current) {
      return
    }

    loadedRef.current = true

    Lottie.loadAnimation({
      container: elRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: checkAnimation,
    })
  }, [])

  return <Container ref={elRef} />
}

const Container = styled.div`
  width: 200px;
  position: absolute;
  left: -70px;
  top: -160px;
`
