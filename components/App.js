import React from 'react'

import Banner from './Banner'
import InitialScene from './InitialScene'

const styles = {
    container: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        flex: 1,
    },
}

const App = (props) => {
    return (
        <div style={styles.container}>
            <Banner />
            <InitialScene />
        </div>
    )
}

export default App
