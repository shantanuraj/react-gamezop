/**
 * Initial Games service
 */

import { INITIAL_GAMES } from '../config/constants'

export const getInitialGames = () => {
    return fetch(INITIAL_GAMES).then(response => response.json()).then(response => response.data)
}
