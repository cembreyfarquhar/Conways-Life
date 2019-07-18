import React from 'react'

const Cell = ({ id, currentState }) => {
    if (currentState === 'dead') {
        return (
            <div
                style={{
                    boxSizing: 'border-box',
                    width: '20px',
                    height: '20px',
                    border: '1px solid grey',
                }}
            >
                {id}
            </div>
        )
    } else if (currentState === 'alive') {
        return (
            <div
                style={{
                    boxSizing: 'border-box',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'black',
                    border: '1px solid grey',
                    fontSize: '8px',
                }}
            >
                {id}
            </div>
        )
    }
}

export default Cell
