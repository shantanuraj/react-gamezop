import React, {
    Component
} from 'react'

import { getInitialGames } from '../service/Games'

import Games from './Games'

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        marginLeft: '30vw'
    },
    content: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        fontSize: 72
    }
}

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
            <div style={styles.container}>
                <p style={styles.content}>Loading...</p>
            </div>
        )
    }

    renderLoaded() {
        return (
            <div style={styles.container}>
                <Games games={this.state.games} />
            </div>
        )
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
