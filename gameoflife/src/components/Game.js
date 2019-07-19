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

    getAliveNeighbors(grid, cell) {
        const x = cell.x
        const y = cell.y
        let count = 0
        //top
        if (grid.indexOf([x][y - 1]) !== -1 && grid[x][y - 1].isAlive) count++
        //top right
        if (grid.indexOf([x + 1][y - 1]) !== -1 && grid[x + 1][y - 1].isAlive)
            count++
        //right
        if (grid.indexOf([x + 1][y]) !== -1 && grid[x + 1][y].isAlive) count++

        //bottom right
        if (grid.indexOf([x + 1][y + 1]) !== -1 && grid[x + 1][y + 1].isAlive)
            count++

        //bottom
        if (grid.indexOf([x - 1][y]) !== -1 && grid[x - 1][y].isAlive) count++

        //bottom left
        if (grid.indexOf([x - 1][y - 1]) !== -1 && grid[x - 1][y - 1].isAlive)
            count++

        //left
        if (grid.indexOf([x - 1][y]) !== -1 && grid[x - 1][y].isAlive) count++

        //top left
        if (grid.indexOf([x - 1][y]) !== -1 && grid[x][y].isAlive) count++

        return count
    }

    makeNewGrid(oldGrid) {
        const grid = []

        for (let i = 0; i < this.x; i++) {
            const row = []
            for (let j = 0; j < this.y; j++) {
                const isAlive = this.checkIfShouldLive(oldGrid, [i, j])
                row.push({ x: i, y: j, isAlive })
            }
            grid.push(row)
        }

        return grid
    }

    checkIfShouldLive(grid, posArr) {
        const [x, y] = posArr

        const cell = grid[x][y]

        const neighbors = this.getAliveNeighbors(grid, cell)

        console.log(cell)
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
        }
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
