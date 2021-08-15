import axios from 'axios'
import { charactersConstants, loadingConstants } from '../constants';

export const charactersActions = {
    get,
    setFilter,
    addFavorite,
    deleteFavorite,
    register,
}

function get() {
    return async dispatch => {
        dispatch({ type: loadingConstants.SET_LOADING, payload: true });
        await axios.get(`${process.env.REACT_APP_API}/characters`)
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
    return async dispatch => {
        dispatch({ type: charactersConstants.SET_FILTER, payload: rol });
    }
}

function addFavorite(character){
    return async dispatch => {
        let data = character.character;
        data.favorite = true;
        dispatch({ type: loadingConstants.SET_LOADING, payload: true });
        await axios.put(`${process.env.REACT_APP_API}/characters/${data.id}`, data)
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
    return async dispatch => {
        let data = character;
        data.favorite = false;
        dispatch({ type: loadingConstants.SET_LOADING, payload: true });
        await axios.put(`${process.env.REACT_APP_API}/characters/${data.id}`, data)
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

function register(character) {
    return async dispatch => {
        await axios.post(`${process.env.REACT_APP_API}/characters`, character)
            .then((response) => {
                if(response.status === 201) {
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
