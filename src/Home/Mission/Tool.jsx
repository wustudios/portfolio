import styled from 'styled-components'

export default function Tool({ icon, children }) {
  return (
    <Box>
      <img src={icon} alt={`${children} icon`} />
      <span>{children}</span>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 16px 4px 12px;
  background: rgba(58, 58, 58, 0.35);
  backdrop-filter: blur(10px);
  border-radius: 100px;
  height: 40px;
  font-size: 0.875rem;
  color: #ffffff;

  img {
    margin-right: 4px;
    width: 24px;
    max-height: 24px;
  }
`
