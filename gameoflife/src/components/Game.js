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
        this.setState({})
        if (this.props.playing === false) {
            clearInterval(this.intervalId)
        }
    }

    makeGrid() {
        const grid = []

        for (let i = 0; i < this.x; i++) {
            const row = []
            for (let j = 0; j < this.y; j++) {
                row.push(0)
            }
            grid.push(row)
        }
        console.log(grid[2][3])
    }

    componentDidMount() {
        this.intervalId = setInterval(this.loop.bind(this), 1000)
        this.makeGrid()
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
