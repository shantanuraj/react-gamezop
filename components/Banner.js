/**
 * Left side banner
 */

'use strict'

import React from 'react'

const styles = {
    banner: {
        display: 'flex',
        position: 'fixed',
        backgroundColor: '#37479F',
        height: '100vh',
        width: '30vw',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        fontSize: 72,
        color: '#eee'
    }
}

const Banner = (props) => {
    return (
        <div style={styles.banner}>
            <p style={styles.content}>Gamezop</p>
        </div>
    )
}

export default Banner
