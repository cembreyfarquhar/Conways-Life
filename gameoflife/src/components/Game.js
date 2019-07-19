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
        this.setState({ grid: this.makeNewGrid() })
        if (this.props.playing === false) {
            clearInterval(this.intervalId)
        }
    }

    getAliveNeighbors(i, j) {
        let count = 0

        const grid = this.state.grid
        //top
        if (j > 0 && grid[i][j - 1].isAlive) count += 1
        //top right
        if (j > 0 && i < 19 && grid[i + 1][j - 1].isAlive) count += 1
        //right
        if (i < 19 && grid[i + 1][j].isAlive) count += 1

        //bottom right
        if (i < 19 && j < 19 && grid[i + 1][j + 1].isAlive) count += 1

        //bottom
        if (j < 19 && grid[i][j + 1].isAlive) count += 1

        //bottom left
        if (i > 0 && j < 19 && j > 0 && grid[i - 1][j + 1].isAlive) count += 1

        //left
        if (i > 0 && grid[i - 1][j].isAlive) count += 1

        //top left
        if (i > 0 && j > 0 && grid[i][j].isAlive) count += 1

        return count
    }

    makeNewGrid() {
        const grid = []

        for (let i = 0; i < this.x; i++) {
            const row = []
            for (let j = 0; j < this.y; j++) {
                const isAlive = this.checkIfShouldLive(i, j)
                // const isAlive = true

                row.push({ x: i, y: j, isAlive })
            }
            grid.push(row)
        }

        return grid
    }

    checkIfShouldLive(i, j) {
        const cell = this.state.grid[i][j]

        const neighbors = this.getAliveNeighbors(i, j)

        if (neighbors > 0) {
            console.log(neighbors)
        }

        // console.log(cell)
        // Alive, < 2 neighbors === DEAD by underpopulation

        if (cell.isAlive && neighbors < 2) {
            return false
        }

        // Alive, 2 or 3 neighbors, LIVES ON
        if (cell.isAlive && (neighbors === 2 || neighbors === 3)) {
            return true
        }

        // Alive, >3 neighbors === DEAD by overpopulation
        if (cell.isAlive && neighbors > 3) {
            return false
        }

        // Dead, 3 neighbors === ALIVE by reproduction
        if (!cell.isAlive && neighbors === 3) {
            return true
        } else return false
    }

    makeFirstGrid() {
        const grid = []

        for (let i = 0; i < this.x; i++) {
            const row = []
            for (let j = 0; j < this.y; j++) {
                let isAlive = false
                if ((i === 10) & (j === 10)) {
                    isAlive = true
                }
                if ((i === 11) & (j === 11)) {
                    isAlive = true
                }
                if ((i === 11) & (j === 12)) {
                    isAlive = true
                }
                if ((i === 12) & (j === 10)) {
                    isAlive = true
                }
                if ((i === 12) & (j === 11)) {
                    isAlive = true
                }
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
