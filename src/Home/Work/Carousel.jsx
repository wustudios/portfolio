import { useState } from 'react'
import SiteLink from './SiteLink'
import { CASES } from '.'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { breakpoints, colors } from '../../lib/theme'
import CaseImage from './CaseImage'

export default function Carousel() {
  const [swiper, setSwiper] = useState(null)
  const [index, setIndex] = useState(0)

  return (
    <Main>
      <Content>
        <Title>Work</Title>
        <StyledTabs
          variant="fullWidth"
          value={index}
          onChange={(e, index) => {
            if (!swiper) {
              return
            }

            swiper.slideTo(index)
          }}
          aria-label="basic tabs example"
        >
          {CASES.map((_, i) => (
            <Tab label={`Case ${i + 1}`} key={i} disableRipple />
          ))}
        </StyledTabs>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation]}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
          navigation
          style={{
            '--swiper-navigation-color': '#FFFFFF',
            '--swiper-navigation-size': '22px',
          }}
        >
          {CASES.map((c, i) => (
            <SwiperSlide key={i}>
              <Case>
                <StyledCaseImage case={c} />
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                  <SiteLink href={c.url} />
                </div>
              </Case>
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
    </Main>
  )
}

const Main = styled.div`
  padding: 44px 0;
  display: flex;
  background: #000000;
  flex-direction: row;

  > div {
    flex: 1;
  }
`

const Content = styled.div`
  width: 100%;
  padding: 32px;
  margin: 0 auto;
  /**
  * Set max width to prevent slider.js from 
  * expanding to infinite width
  **/
  max-width: calc(100vw - 16px);

  @media (min-width: 768px) {
    width: 70%;
    padding: 0 15%;
  }

  .swiper-slide {
    height: auto;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background: ${colors.overlay};
    width: 48px;
    height: 48px;
    border-radius: 48px;
  }
`

const Title = styled.h2`
  margin: 0 0 32px;
`

const StyledTabs = styled(Tabs)`
  margin-bottom: 44px;
`

const Case = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
  }
`

const StyledCaseImage = styled(CaseImage)``
