/**
 * 모달 창 & 후면 오버레이 컴포넌트
 *
 * opened {boolean}: 모달 창 표시 여부
 * handleModal {function}: 모달 창 표시 상태 설정 함수
 * contents {object}: 모달 창 내용 객체 (없을 경우 모달 창의 자식 컴포넌트가 렌더링됨)
 * contents.title {string}: 모달 창 제목
 * contents.content {string}: 모달 창 내용
 * contents.actions {array}: 하단 버튼의 정보를 담는 객체 리스트
 * contents.actions[].name {string}: 버튼에 표시되는 텍스트
 * contents.actions[].color {string}: 버튼 색상 (생략 시 기본 색상으로)
 * contents.actions[].action {function}: 버튼 클릭 시 호출되는 함수
 */

import ModalPortal from './Portal'
import Button from './Button'
import classes from './Modal.module.css'

// TODO: Sheet 컴포넌트로 교체
function ModalSection({ children, opened, handleModal, contents }) {
  const closeModal = e => {
    const isClosable = [...e.target.classList].some(cls => cls === 'closable')
    if (opened && isClosable) handleModal()
  }
  
  return (
    <div className={`${classes.overlay} closable`} onClick={closeModal}>
      <section className={classes.modal}>
        {contents ? (
          <>
            <h1 className="subtitle">{contents.title}</h1>
            <div className={classes.content}>{contents.content}</div>
            <div className={classes.actions}>
              {
                contents.actions ? (
                  contents.actions.map((btn, index) => 
                    <Button key={index} text={btn.name} color={btn.color} onEvent={btn.action} closable />
                  )
                ) : <Button text="확인" onEvent={closeModal} closable />
              }
            </div>
          </>
        ) : (
          <>
            {children}
            <Button text="확인" onEvent={closeModal} closable />
          </>
        )}
      </section>
    </div>
  )
}

export default function Modal({ opened, ...rest }) {
  return (
    <ModalPortal>
      {opened && <ModalSection opened={opened} {...rest} />}
    </ModalPortal>
  )
}