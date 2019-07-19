import React, { useState } from 'react'

const Cell = ({ x, y, isAlive }) => {
    console.log(x)
    if (isAlive) {
        return (
            <div
                style={{
                    boxSizing: 'border-box',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'black',
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
                    backgroundColor: 'white',
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
