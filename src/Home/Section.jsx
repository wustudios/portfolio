import styled from 'styled-components'

const Section = styled.div`
  height: ${(props) => (props.half ? '50vh' : '100vh')};
  ${(props) => (props.half ? 'transform: translate(0, -25%)' : '')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export default Section
