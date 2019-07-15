import React from 'react'
import logo from './logo.svg'
import './App.css'
import Grid from './components/Grid'

function App() {
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
            <Grid />
        </div>
    )
}

export default App
