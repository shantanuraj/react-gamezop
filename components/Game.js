/**
 * Game card
 */

'use strict'

import React from 'react'

import { getCoverUrl } from '../config/utils'

const Game = (props) => {
    return (
        <div onClick={props.onClick}>
            <h2>{props.game.name}</h2>
            <img src={getCoverUrl(props.game.code)} />
        </div>
    )
}

export default Game
