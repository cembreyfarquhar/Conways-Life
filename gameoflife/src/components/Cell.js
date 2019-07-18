import React from 'react'

const Cell = ({ x, y, isAlive }) => {
    if (isAlive) {
        return (
            <div
                style={{
                    boxSizing: 'border-box',
                    width: '20px',
                    height: '20px',
                    border: '1px solid grey',
                }}
            >
                {/* {id} */}
            </div>
        )
    } else {
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
                {/* {id} */}
            </div>
        )
    }
}

export default Cell
