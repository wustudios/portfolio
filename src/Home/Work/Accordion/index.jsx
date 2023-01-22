import MuiAccordion from '@mui/material/Accordion'
import styled from 'styled-components'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandIcon from './ExpandIcon'
import { breakpoints } from '../../../lib/theme'
import { CASES } from '..'
import SiteLink from '../SiteLink'
import CaseImage from '../CaseImage'

export default function Accordion() {
  return (
    <Main>
      <Title>Work</Title>
      {CASES.map((c, i) => {
        const number = i + 1
        return (
          <MuiAccordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandIcon />}
              aria-controls={`case ${number} content`}
            >
              {c.title}
            </AccordionSummary>
            <AccordionDetails>
              <CaseImage case={c} />
              <p>{c.description}</p>
              <SiteLink href={c.url} />
            </AccordionDetails>
          </MuiAccordion>
        )
      })}
    </Main>
  )
}

const Main = styled.div`
  padding: 0 20px;

  @media (min-width: ${breakpoints.sm}) {
    padding: 0 55px;
  }
`

const Title = styled.h2`
  margin: 0 0 32px;
`
