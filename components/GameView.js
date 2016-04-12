/**
 * IFrame to render game in
 */

'use strict'

import React from 'react'

const GameView = (props) => (
    <iframe src={props.uri} />
)

export default GameView
