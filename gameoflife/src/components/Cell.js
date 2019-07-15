import React from 'react'

const Cell = ({ cell }) => {
    if (cell.currentState === 'dead') {
        return (
            <div
                style={{
                    boxSizing: 'border-box',
                    width: '20px',
                    height: '20px',
                    border: '1px solid grey',
                }}
            >
                {cell.id}
            </div>
        )
    } else if (cell.currentState === 'alive') {
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
                {cell.id}
            </div>
        )
    }
}

export default Cell
