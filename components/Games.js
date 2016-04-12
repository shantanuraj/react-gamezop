/**
 * Games list
 */

'use strict'

import React from 'react'

import Game from './Game'

const renderGame = game => (
    <Game key={game.code} game={game} />
)

const Games = (props) => {
    return (
        <div>
            {props.games.map(renderGame)}
        </div>
    )
}

export default Games
