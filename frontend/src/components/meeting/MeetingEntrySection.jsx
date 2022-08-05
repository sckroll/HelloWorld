import { useState } from 'react'
import Button from '../common/Button'
import Modal from '../common/Modal'
import LoadingContainer from './LoadingContainer'

export default function MeetingEntrySection() {
  const [modalState, setModalState] = useState(false)
  const handleModal = () => {
    setModalState(!modalState)
  }

  const contents = {
    content: <LoadingContainer handleModal={handleModal}></LoadingContainer>,
  }

  return (
    <>
      <Button text="랜덤 매칭 시작하기" onEvent={handleModal}></Button>
      <Modal
        opened={modalState}
        handleModal={handleModal}
        contents={contents}
        locked
      />
    </>
  )
}