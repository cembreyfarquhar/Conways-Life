import React from 'react'
import Grid from './Grid'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = { grid: [] }
        this.x = 20
        this.y = 20
    }

    loop() {
        this.setState(prevState => ({
            ...prevState,
            grid: this.makeNewGrid(prevState.grid),
        }))
        if (this.props.playing === false) {
            clearInterval(this.intervalId)
        }
    }

    getAliveNeighbors(cell) {
        //top
        //top right
        //right
        //bottom right
        //bottom
        //bottom left
        //left
        //top left
    }

    makeNewGrid(oldGrid) {
        const grid = []

        for (let i = 0; i < this.x; i++) {
            const row = []
            for (let j = 0; j < this.y; j++) {
                const isAlive = this.checkIfShouldLive()
                row.push({ x: i, y: j, isAlive: true })
            }
            grid.push(row)
        }

        return grid
    }

    checkIfShouldLive(cell) {
        return true
    }

    makeFirstGrid() {
        const grid = []

        for (let i = 0; i < this.x; i++) {
            const row = []
            for (let j = 0; j < this.y; j++) {
                const isAlive = false
                row.push({ i, j, isAlive })
            }
            grid.push(row)
        }

        return grid
    }

    componentDidMount() {
        this.setState({ grid: this.makeFirstGrid() })
        this.intervalId = setInterval(this.loop.bind(this), 1000)
    }

    render() {
        return (
            <div>
                <Grid grid={this.state.grid} />
            </div>
        )
    }
}

export default Game
