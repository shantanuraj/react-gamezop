/**
 * Games list
 */

'use strict'

import React from 'react'

import Game from './Game'

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
    }
}

const renderGame = game => (
    <Game key={game.code} game={game} />
)

const Games = (props) => {
    return (
        <div style={styles.container}>
            {props.games.map(renderGame)}
        </div>
    )
}

export default Games
