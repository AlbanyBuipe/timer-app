import React from 'react'

let SecondsField = ({ onSecondsChange }) => 
    <input
        className='ma3 br2 ba b--light-red pa2 tr dib'
        type='text'
        onChange={onSecondsChange}
     />

export default SecondsField