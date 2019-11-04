import React from 'react'

let StartButton = ({ countDown }) => <div>
    <button
        className='pointer link grow br2 ba b--red pa2 pr4 pl4 white bg-light-red bold'
        onClick={countDown}
    >
        Start
    </button>
</div>

export default StartButton