import React, { useEffect, useState } from 'react'
import './App.css'
import Game from './components/Game'

function App() {
    const [playing, setPlaying] = useState(null)
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
                <button
                    onClick={e => {
                        e.preventDefault()
                        setPlaying(false)
                    }}
                >
                    Stop
                </button>
            </header>
            <Game playing={playing} />
        </div>
    )
}

export default App
