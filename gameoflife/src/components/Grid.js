import React from 'react'

import Cell from './Cell'

const Grid = ({ grid }) => {
    // initialize grid

    // * Properties
    // - [ ] currentState: (alive, dead),
    //   (black, white)
    // - [ ] isClickable:
    // - can be clicked to allow user to
    //   setup initial cell configuration
    // - should NOT be clickable while
    //   simulation is running
    return (
        <div
            style={{
                boxSizing: 'border-box',
                width: '402px',
                height: '402px',
                border: '1px solid black',
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
            {grid.map(cell => {
                return <Cell cell={cell} />
            })}
        </div>
    )
}

export default Grid
