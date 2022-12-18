import styled from 'styled-components'
import { ReactComponent as Image } from './logo-horizontal.svg'

const Logo = styled(({ compact, ...otherProps }) => <Image {...otherProps} />)`
  position: fixed;
  top: ${(props) => (props.compact ? '32px' : '50%')};
  width: ${(props) => (props.compact ? '150px' : '400px')};
  left: ${(props) => (props.compact ? '32px' : '15%')};

   {
    /* 
    * Apply a transform of -50% to account for logo height, 
    * and have it actually be centered vertically. 
    */
  }
  transform: ${(props) =>
    props.compact ? 'translate(0,0)' : 'translate(0, -50%)'};

  transition: all 275ms ease-in;
`

export default Logo
