import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Grid from './components/Grid'

function App() {
    let [grid, setGrid] = useState([])

    const [playing, setPlaying] = useState(false)

    const gridSize = []

    for (let i = 0; i < 400; i++) {
        gridSize.push({ id: i })
    }

    useEffect(() => {
        setGrid(
            gridSize.map(cell => {
                return {
                    ...cell,
                    currentState: 'alive',
                }
            }),
        )
    }, [])

    const getAliveNeighbors = ({ id }) => {
        let count = 0
        console.log('heerss')
        console.log(grid[id])

        // right
        if (id % 20 !== 20) {
            if (grid[id].currentState === 'alive') count++
        }

        // bottom right
        if (id % 20 !== 20 && id - 380 < 1) {
            if (grid[id + 20].currentState === 'alive') count++
        }

        // bottom
        if (id % 20 !== 20 && id - 380 < 1) {
            if (grid[id].currentState === 'alive') count++
        }

        // bottom left
        if (id % 20 !== 20 && id - 380 < 1) {
            if (grid[id].currentState === 'alive') count++
        }

        // left
        if (id % 20 !== 20) {
            if (grid[id].currentState === 'alive') count++
        }

        // top left
        if (id % 20 !== 20) {
            if (grid[id].currentState === 'alive') count++
        }

        // top
        if (id % 20 !== 20) {
            if (grid[id].currentState === 'alive') count++
        }

        // top right
        if (id % 20 !== 20) {
            if (grid[id].currentState === 'alive') count++
        }

        return count
    }

    useEffect(() => {
        if (playing) {
            if (grid.length > 0) {
                setGrid(
                    gridSize.map(cellID => {
                        console.log(grid)
                        // const living = grid[cellID].currentState
                        // const neighbors = getAliveNeighbors(cellID)
                        const living = false
                        const neighbors = 1
                        let resultingState = false
                        if (living && neighbors < 2) {
                            resultingState = false
                        }
                        if (living && (neighbors === 2 || neighbors === 3)) {
                            resultingState = true
                        }
                        if (living && neighbors > 3) {
                            resultingState = false
                        }
                        if (!living && neighbors == 3) {
                            resultingState = true
                        }
                        return {
                            id: cellID,
                            currentState: resultingState ? 'alive' : 'dead',
                        }
                    }),
                )
            }
        }
    }, [playing])
    return (
        <div
            style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
            }}
        >
            <header>
                <h1>Conway's Game of Life</h1>
                <button
                    onClick={e => {
                        e.preventDefault()
                        setPlaying(true)
                    }}
                >
                    Play
                </button>
            </header>
            <Grid grid={grid} />
        </div>
    )
}

export default App
