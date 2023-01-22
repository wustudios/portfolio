import { useEffect, useState } from 'react'
import styled from 'styled-components'
import 'waypoints/lib/noframework.waypoints.min.js'
import { MISSION, useSection } from '.'

export default function Section(props) {
  const { id } = props
  const [el, setEl] = useState(null)
  const { setSection } = useSection()

  useEffect(() => {
    if (!el) {
      return
    }

    // eslint-disable-next-line no-undef
    const wp = new Waypoint({
      element: el,
      handler: function (direction) {
        setSection(id || MISSION)
      },
    })

    return wp.destroy
  }, [el, id, setSection])

  return <Box {...props} ref={setEl} />
}

const Box = styled.div`
  min-height: ${(props) => (props.half ? '50vh' : '100vh')};
  ${(props) => (props.half ? 'transform: translate(0, -25%)' : '')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
