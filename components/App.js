import React, {
    Component
} from 'react'

import { getInitialGames } from '../service/Games'

import Games from './Games'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            games: null
        }
    }

    renderLoading() {
        return (
            <div>
                Loading...
            </div>
        )
    }

    renderLoaded() {
        return <Games games={this.state.games} />
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        getInitialGames()
        .then(games => this.setState({
            loaded: true,
            games
        }))
    }

    render() {
        if (this.state.loaded) {
            return this.renderLoaded()
        } else {
            return this.renderLoading()
        }
    }
}

export default App
