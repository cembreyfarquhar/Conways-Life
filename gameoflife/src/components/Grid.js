import React from 'react'

import Cell from './Cell'

const Grid = ({ grid }) => {
    // initialize grid
    console.table(grid)

    // * Properties
    // - [ ] currentState: (alive, dead),
    //   (black, white)
    // - [ ] isClickable:
    // - can be clicked to allow user to
    //   setup initial cell configuration
    // - should NOT be clickable while
    //   simulation is running
    if (!grid.length) {
        return <h3>Loading</h3>
    } else {
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
                    return <Cell x={cell.x} y={cell.y} isAlive={cell.isAlive} />
                })}
            </div>
        )
    }
}

export default Grid
