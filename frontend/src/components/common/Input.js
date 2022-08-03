//email input 맞춤형 컴포넌트 진행

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classes from './Input.module.css'
import { useRef } from 'react'
// Input-Component /////////////////////////
/// /////////////////////////////////////////
/// /////////////////////////////////////////
// 설정
// props.id
// label 이름, input name 속성, label for 속성 설정
// props.type (선택)
// 해당 input의 type 설정, 적용x 시 기본 값은 text
// props.placeHolder (선택)
// placeHolder 적용

function Input({ id, type = 'text', placeholder = '', onValid, onData }) {
  const inputRef = useRef()
  const [errorComponent, setErrorComponent] = useState(null)

  let colorInputClass = ''
  let colorLabelClass = ''

  switch (errorComponent) {
    case null:
      colorInputClass = ''
      colorLabelClass = ''
      break
    case '':
      colorInputClass = classes.valid_input_true
      colorLabelClass = classes.valid_label_true
      break
    default:
      colorInputClass = classes.valid_input_error
      colorLabelClass = classes.valid_label_error
  }

  let checkValid
  function inputValidHandler() {
    clearTimeout(checkValid)
    checkValid = setTimeout(() => {
      let errorComponent = ''
      for (let func in onValid) {
        if (!onValid[func].func(inputRef.current.value)) {
          errorComponent = <ErrorComponent text={onValid[func].message} />
          break
        }
      }
      console.log('유효성 체크')
      setErrorComponent(errorComponent)
      onData({
        value: inputRef.current.value,
        valid: errorComponent === '' ? true : false,
      })
    }, 500)
  }

  return (
    <div className={classes.input_wrapper}>
      <label
        className={`${classes.input_label} ${colorLabelClass}`}
        htmlFor={id}
      >
        {id}
      </label>
      <input
        className={`${classes.input} ${colorInputClass}`}
        name={id}
        type={type}
        placeholder={placeholder}
        onKeyUp={inputValidHandler}
        ref={inputRef}
      />
      {/* 에레가 렌더링 되는 창 */}
      {errorComponent && errorComponent}
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onValid: PropTypes.object,
  onData: PropTypes.func,
}

export default Input

function ErrorComponent({ text }) {
  return <div className={classes.error_component}>{text}</div>
}

ErrorComponent.propTypes = {
  text: PropTypes.string.isRequired,
}