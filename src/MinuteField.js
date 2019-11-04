import React from 'react'

let MinuteField = ({ onMinuteChange }) => 
    <input
        className='ma3 br2 ba b--light-red pa2 tr dib'
        type='text'
        onChange={onMinuteChange}
     />

export default MinuteField