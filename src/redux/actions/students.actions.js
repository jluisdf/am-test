import axios from 'axios'
import { studentsConstants, loadingConstants } from '../constants';

export const studentsActions = {
    get
}

function get() {
    return async dispatch => {
        dispatch({ type: loadingConstants.SET_LOADING, payload: true });
        await axios.get('http://localhost:5000/students')
            .then((response) => {
                dispatch({ type: studentsConstants.SET_STUDENTS, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
                // dispatch(request(errorConstants.SET_ERROR, Error.handlerMessage(error.request)));
            })
            .finally((e) => {
                // console.log(e);
                dispatch({ type: loadingConstants.SET_LOADING, payload: false });
            });
    }
}
