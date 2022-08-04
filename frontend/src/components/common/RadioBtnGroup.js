/**
 * 라디오 버튼 & 그룹 컴포넌트
 *
 * name {string}: 라디오 버튼 그룹을 구분하는 이름
 * items {array}: 라디오 버튼의 정보를 담는 객체 리스트
 * items[].name {string}: 라디오 버튼 텍스트
 * items[].value {string}: 라디오 버튼 클릭 시 받는 값
 * vertical {boolean}: 아이템 세로 정렬 여부 (기본값은 false)
 */

import { useState } from 'react'
import classes from './RadioBtnGroup.module.css'
import PropTypes from 'prop-types'

function RadioBtn({ id, name, children, selectedValue, handleChange }) {
  return (
    <label htmlFor={id} className={classes.radioBtn}>
      <input
        type="radio"
        name={name}
        id={id}
        value={id}
        checked={selectedValue === id}
        onChange={handleChange}
        className={classes.invisibleRadio}
      />
      <div className={classes.visibleRadio}>
        <div className={classes.outer}>
          <div className={classes.inner}></div>
        </div>
      </div>
      {children}
    </label>
  )
}

export default function RadioBtnGroup({ name, items, vertical }) {
  const [value, setValue] = useState(items[0].value)
  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <div
      className={`${classes.radioBtnGroup} ${vertical ? classes.vertical : ''}`}
    >
      {items.map(item => (
        <RadioBtn
          key={item.value}
          id={item.value}
          name={name}
          selectedValue={value}
          handleChange={handleChange}
        >
          {item.name}
        </RadioBtn>
      ))}
    </div>
  )
}

RadioBtn.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  selectedValue: PropTypes.string,
  handleChange: PropTypes.func,
}

RadioBtnGroup.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  vertical: PropTypes.bool,
}