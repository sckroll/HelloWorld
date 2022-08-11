import { useState, useEffect } from 'react'
import Button from '../common/Button'
import Modal from '../common/Modal'
import LoadingContainer from './LoadingContainer'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findRoom } from '../../store/room-thunkActions'

export default function MeetingEntrySection() {
  const [modalState, setModalState] = useState(false)
  const dispatch = useDispatch()
  const state = useSelector(state => state.auth)
  const location = useLocation()
  useEffect(() => {
    if (location.state) {
      handleModal()
      location.state = null
    }
  }, [location])

  const roomHandler = () => {
    console.log(state.token)
    dispatch(findRoom(state.token))
  }

  const handleModal = () => setModalState(!modalState)

  const contents = {
    content: <LoadingContainer handleModal={handleModal}></LoadingContainer>,
  }

  return (
    <>
      <Button text="룸 테스트용 버튼" onEvent={roomHandler}></Button>
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
