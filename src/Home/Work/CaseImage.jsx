import { useState } from 'react'
import styled from 'styled-components'
import 'swiper/css'
import 'swiper/css/navigation'
import Modal from '@mui/material/Modal'
import { breakpoints } from '../../lib/theme'

export default function CaseImage(props) {
  const [showingModal, setShowingModal] = useState(false)
  const toggleModal = () => {
    setShowingModal((showing) => !showingModal)
  }

  return (
    <>
      <Modal
        open={showingModal}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        componentsProps={{
          backdrop: {
            style: {
              backdropFilter: 'blur(3px)',
              backgroundColor: 'rgba(0,0,0,0.6)',
            },
          },
        }}
      >
        <ModalContent onClick={toggleModal} disableScrollLock={false}>
          <img src={props.case.image} alt={props.case.title} />
        </ModalContent>
      </Modal>
      <ThumbnailBox>
        <Thumbnail
          src={props.case.image}
          alt={props.case.title}
          onClick={toggleModal}
        />
      </ThumbnailBox>
    </>
  )
}

const ThumbnailBox = styled.div`
  overflow: hidden;
  flex: 0 0 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 30px 0;

  @media (min-width: ${breakpoints.lg}) {
    margin: 0 70px 0 0;
  }
`

const Thumbnail = styled.img`
  cursor: pointer;
  max-width: 100%;
  max-height: 100%;
`

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    height: calc(100% - 60px);
  }
`
