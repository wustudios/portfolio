import Section from '../Section'
import styled from 'styled-components'
import Tool from './Tool'
import reactIcon from './tool-icons/react.svg'
import laravelIcon from './tool-icons/laravel.svg'
import figmaIcon from './tool-icons/figma.svg'
import terraformIcon from './tool-icons/terraform.svg'
import vercelIcon from './tool-icons/vercel.svg'

export default function Mission() {
  return (
    <>
      <Section id="mission">
        <p>
          A software development studio helping clients make the world a
          smaller, kinder place. We specialize in making complex software
          amazingly simple.
        </p>
      </Section>
      <Section>
        <p>
          It all starts with your idea. We then begin to discover the
          assumptions, solutions, and evaluations with you. Next, we'll start
          looking for the right tech stack.
        </p>
      </Section>
      <ToolsSection>
        <p>
          We believe in using the right tool for the job, and are usually tech
          agnostic. That said, here are some of the fantastic tools we use
          daily:
        </p>
        <Tools>
          <Tool icon={reactIcon}>React</Tool>
          <Tool icon={laravelIcon}>Laravel</Tool>
          <Tool icon={terraformIcon}>Terraform</Tool>
          <Tool icon={vercelIcon}>Vercel</Tool>
          <Tool icon={figmaIcon}>Figma</Tool>
        </Tools>
      </ToolsSection>
    </>
  )
}

const ToolsSection = styled(Section)`
  align-items: flex-start;
`

const Tools = styled.div`
  gap: 8px;
  display: flex;
  flex-wrap: wrap;
`
