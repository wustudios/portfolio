import Button from '../lib/Button'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

export default function AppBar() {
  return (
    <Box>
      <PageLink route="/">Mission</PageLink>
      <PageLink route="/work">Work</PageLink>
      <PageLink route="/contact">Contact</PageLink>
    </Box>
  )
}

function PageLink({ route, children }) {
  let { pathname } = useLocation()

  const isActive = pathname === route

  return (
    <StyledLink to={route}>
      <StyledButton variant="text" highlight={isActive}>
        {children}
      </StyledButton>
    </StyledLink>
  )
}

const StyledButton = styled(({ highlight, ...otherProps }) => (
  <Button {...otherProps} />
))`
  color: ${(props) =>
    props.highlight
      ? props.theme.colors.brand
      : props.theme.colors.text.primary}!important;

  &:hover {
    color: ${(props) => props.theme.colors.brand}!important;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none !important;
`

const padding = 32

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  padding: 16px ${padding}px;
  width: calc(100% - ${2 * padding}px);
`
