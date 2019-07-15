import React from 'react'

import Cell from './Cell'

const Grid = () => {
    // initialize grid
    const grid = []
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            grid.push({ currentState: 'dead' })
        } else {
            grid.push({ currentState: 'alive' })
        }
    }
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
