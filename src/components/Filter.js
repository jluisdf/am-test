import React from 'react';
import { useDispatch } from 'react-redux';
import { charactersActions } from '../redux/actions/characters.actions';

const Filter = () => {

    const dispatch = useDispatch();
    const changeFilter = rol => {
        dispatch(charactersActions.setFilter(rol));
    }

    return (
        <div className="row">
            <h3 className="text-center color-white mb-4">Selecciona tu filtro</h3>
            <div className="col-6 col-md-3 offset-md-3 d-grid gap-2">
                <button type="button" className="btn btn-secondary filter-button" onClick={() => changeFilter('student')}>ESTUDIANTES</button>
            </div>
            <div className="col-6 col-md-3 d-grid gap-2">
                <button type="button" className="btn btn-secondary filter-button" onClick={() => changeFilter('staff')}>STAFF</button>
            </div>
        </div>
    )
}

export default Filter
