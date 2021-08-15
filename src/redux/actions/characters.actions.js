import axios from 'axios'
import { charactersConstants, loadingConstants } from '../constants';

export const charactersActions = {
    get,
    setFilter,
    addFavorite,
    deleteFavorite,
}

function get() {
    return async dispatch => {
        dispatch({ type: loadingConstants.SET_LOADING, payload: true });
        await axios.get('http://localhost:5000/characters')
            .then((response) => {
                dispatch({ type: charactersConstants.SET_CHARACTERS, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
                // dispatch(request(errorConstants.SET_ERROR, Error.handlerMessage(error.request)));
            })
            .finally((e) => {
                dispatch({ type: loadingConstants.SET_LOADING, payload: false });
            });
    }
}

function setFilter(rol) {
    return async (dispatch, getState) => {
        dispatch({ type: charactersConstants.SET_FILTER, payload: rol });
    }
}

function addFavorite(character){
    return async (dispatch, getState) => {
        let data = character.character;
        data.favorite = true;
        dispatch({ type: loadingConstants.SET_LOADING, payload: true });
        await axios.put(`http://localhost:5000/characters/${data.id}`, data)
            .then((response) => {
                if(response.status === 200) {
                    dispatch(charactersActions.get());
                }
            })
            .catch((error) => {
                console.log(error);
                // dispatch(request(errorConstants.SET_ERROR, Error.handlerMessage(error.request)));
            })
            .finally((e) => {
                dispatch({ type: loadingConstants.SET_LOADING, payload: false });
            });
    }
}

function deleteFavorite(character) {
    return async (dispatch, getState) => {
        let data = character;
        data.favorite = false;
        dispatch({ type: loadingConstants.SET_LOADING, payload: true });
        await axios.put(`http://localhost:5000/characters/${data.id}`, data)
            .then((response) => {
                if(response.status === 200) {
                    dispatch(charactersActions.get());
                }
            })
            .catch((error) => {
                console.log(error);
                // dispatch(request(errorConstants.SET_ERROR, Error.handlerMessage(error.request)));
            })
            .finally((e) => {
                dispatch({ type: loadingConstants.SET_LOADING, payload: false });
            });
    }
}
