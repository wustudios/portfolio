import styled from 'styled-components'
import linkIcon from '../../lib/icons/link.svg'
import { colors } from '../../lib/theme'

export default function SiteLink({ href }) {
  return (
    <StyledAnchor href={href}>
      <img src={linkIcon} alt="link" />
      {`<View Website/>`}
    </StyledAnchor>
  )
}

const StyledAnchor = styled.a`
  color: ${colors.brand};
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    margin-right: 8px;
  }
`
