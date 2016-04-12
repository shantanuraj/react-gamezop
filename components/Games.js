/**
 * Games list
 */

'use strict'

import React, {
    Component
} from 'react'

import Game from './Game'
import GameView from './GameView'

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
    }
}

class Games extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'list'
        }
    }

    onClick(selectedUrl) {
        return () => this.setState({
            view: 'game',
            selectedUrl
        })
    }

    renderList() {
        return (
            <div style={styles.container}>
                {this.props.games.map(game => <Game onClick={this.onClick(game.gameUrl)} key={game.code} game={game} />)}
            </div>
        )
    }

    renderGameView() {
        return <GameView uri={this.state.selectedUrl} />
    }

    render() {
        if (this.state.view === 'list') {
            return this.renderList()
        } else {
            return this.renderGameView()
        }
    }
}

export default Games
