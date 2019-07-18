import React, { useEffect } from 'react'
import Grid from './Grid'

const Game = ({ playing }) => {
    const grid = []

    useEffect(() => {
        const interval = 1000
        const msg = 'hello'
        const loop = playing
        if (loop) {
            loop = setInterval(() => {
                console.log(msg)
            }, interval)
        } else {
            clearInterval(loop)
        }
    }, [playing])

    for (let i = 1; i <= 400; i++) {
        const x = Math.ceil(i / 20)
        const y = Math.ceil(i / 20)
        const isAlive = i % 2 === 0 ? false : true
        const cell = {
            x,
            y,
            isAlive,
        }
        grid.push(cell)
    }

    return <Grid grid={grid} />
}

export default Game
