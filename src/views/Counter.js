import React from 'react'

const Counter = (props) => (
    <div>
        <h1>{props.number}</h1>
        <button
            onClick={props.incHandler}
        >
            +
                </button>
        <button
            onClick={props.decHandler}
        >
            -
                </button>
    </div>
)


export default Counter