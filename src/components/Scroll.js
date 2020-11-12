import React from 'react'

function Scroll(props) {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: '70vh' }}>
            {props.children}
        </div>
    )
}

export default Scroll

// This is another way of adding styles, as opposed to creating a new CSS file