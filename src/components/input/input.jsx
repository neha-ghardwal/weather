import React from 'react'
import './input.scss'

const Input = (props) => {
  return (
    <div className='boxes'>
        {props.label && <label>{props.label}</label>}
        <input type='text' {...props} />
    </div>
  )
}

export default Input