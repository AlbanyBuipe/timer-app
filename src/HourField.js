import React from 'react'

let HourField = ({ onHourChange }) => 
    <input
        className='ma3 br2 ba b--light-red pa2 tr dib'
        type='text'
        onChange={onHourChange}
     />

export default HourField