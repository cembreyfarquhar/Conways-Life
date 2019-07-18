import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Grid from './components/Grid'

function App() {
    let [grid, setGrid] = useState([])

    const [playing, setPlaying] = useState(true)

    const gridSize = []

    for (let i = 0; i < 400; i++) {
        gridSize.push({ id: i })
    }

    useEffect(() => {
        if (playing) {
            let timer = 0

            setInterval(() => {
                timer++
                console.log(timer)
                setGrid(
                    gridSize.map(cell => {
                        if (cell.id % 2 == 0) {
                            return {
                                ...cell,
                                currentState: 'dead',
                            }
                        }
                        return {
                            ...cell,
                            currentState: 'alive',
                        }
                    }),
                )
            }, 1000)
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
            </header>
            <Grid grid={grid} />
        </div>
    )
}

export default App
