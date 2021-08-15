import { charactersConstants } from '../constants/characters.constants'
const initialState = {
    characters: {},
    filter: null,
}
export function characters(state=initialState, action) {
    switch (action.type) {
        case charactersConstants.SET_CHARACTERS:
            return { ...state, characters: action.payload }
        case charactersConstants.SET_FILTER:
            return { ...state, filter: action.payload }
        default:
            return state;
    }
}
