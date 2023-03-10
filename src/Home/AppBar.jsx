import Button from '../lib/Button'
import styled from 'styled-components'
import { CONTACT, MISSION, useSection, WORK } from '.'

export default function AppBar() {
  return (
    <Box>
      <PageLink section={MISSION}>Mission</PageLink>
      <PageLink section={WORK}>Work</PageLink>
      <PageLink section={CONTACT}>Contact</PageLink>
    </Box>
  )
}

function PageLink({ section, children }) {
  const { section: active } = useSection()
  const isActive = section === active

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.querySelector(`#${section}`).scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <StyledLink href={`#${section}`} onClick={scrollToAnchor}>
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

const StyledLink = styled.a`
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
