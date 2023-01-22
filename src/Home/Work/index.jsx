import 'swiper/css'
import Accordion from './Accordion'
import 'swiper/css/navigation'
import obvioImg from './images/obvio.jpg'
import flowdirectorImg from './images/flowdirector.jpg'
import pureskillImg from './images/pureskill.jpg'
import habitappImg from './images/habitapp.jpg'
import Carousel from './Carousel'
import useMediaQuery from '@mui/material/useMediaQuery'
import Section from '../Section'

export const CASES = [
  {
    title: 'Obv.io',
    description:
      "Virtual event platform built to meet, and exceed the challenges during the pandemic. With events regularly having 20,000 - 30,000 attendees, the architecture had to be designed to scale from 0 to 100,000's of concurrent requests. Today, Obv.io has hosted thousands of events, and delivered highly engaging virtual experience to more than a million virtual attendees.",
    url: 'https://obv.io',
    image: obvioImg,
  },
  {
    title: 'Pureskill.gg',
    description:
      "AI powered e-sports coach. With E-sports taking off, and a current market size of $1.4 billion, projected to grow to $5 billion by 2029, machine-learning AI coaches have started appearing to help players take their game to the next level. We were tapped to help create Pureskill's web application frontend from pixel perfect high fidelity designs.",
    url: 'https://pureskill.gg/',
    image: pureskillImg,
  },
  {
    title: 'HabitApp',
    description:
      ' A cross-platform React Native app designed to help you live a better life. The app was released 4 months ahead of initial deadline, saving more than 60% in development costs.',
    url: 'https://www.thehabitatproject.net/',
    image: habitappImg,
  },
  {
    title: 'Flowdirector',
    description:
      'No code platform for messaging systems. Flowdirector unlocks new value from existing systems that leverage protocols such as JMS, AMQP, or even MQTT. We developed a custom highly dynamic drag/drop interface that enables users to create any input/output, and transformation they may have in mind for their data.',
    url: 'https://www.flowdirector.io/',
    image: flowdirectorImg,
  },
]
export default function Work() {
  return (
    <Section id="work">
      <Content />
    </Section>
  )
}

function Content() {
  const isDesktop = useMediaQuery('(min-width:960px)')

  if (isDesktop) {
    return <Carousel showing={isDesktop} />
  }

  return <Accordion />
}
