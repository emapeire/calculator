import React from 'react'
import '../stylesheets/button-clear.css'

const ButtonClear = (props) => (
  <div className='button-clear' onClick={props.handleClear}>
    {props.children}
  </div>
)

export default ButtonClear
