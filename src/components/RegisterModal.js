import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { charactersActions } from '../redux/actions/characters.actions';
import { useForm } from '../hooks/useForm';

const RegisterModal = (props) => {

    const dispatch = useDispatch();
    const initialData = {
        name: '',
        dateOfBirth: '',
        eyeColour: '',
        hairColour: '',
        gender: '',
        rol: '',
    };
    const [ formValues, handleInputChange, reset ] = useForm(initialData);
    const { name, dateOfBirth, eyeColour, hairColour, gender, rol } = formValues;

    const sumbitForm = e => {
        e.preventDefault();

        // fake url images
        let imgMale = 'https://www.heyuguys.com/images/2011/03/Mad-Eye-Moody-Brendan-Gleeson.jpg';
        let imgFemale = 'http://pm1.narvii.com/6525/e7cf9e635ef2b10e59d331fb0727a444cf269dc0_00.jpg';

        let data = {
            name: name,
            dateOfBirth: dateOfBirth,
            eyeColour: eyeColour,
            hairColour: hairColour,
            gender: gender,
            hogwartsStudent: rol === 'student' ? true : false,
            hogwartsStaff: rol === 'staff' ? true : false,
            image: gender === 'male' ? imgMale : imgFemale,
            favorite: false,
            house: "Gryffindor",
        }

        dispatch(charactersActions.register(data));
        // reset form & close modal
        document.getElementsByClassName('btn-close')[0].click();
        document.getElementById("form-register").reset();
        reset(initialData);
    }


    return (
        <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <form className="row g-3" autoComplete="off" onSubmit={sumbitForm} id="form-register">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title" id="exampleModalLabel">Agrega un personaje</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="name" className="form-label col-form-label-sm">NOMBRE</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Ingresa el nombre"
                                        onChange={handleInputChange}
                                        value={name}
                                    />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="dateOfBirth" className="form-label col-form-label-sm">CUMPLEAÑOS</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        required
                                        placeholder="DD-MM-AAAA"
                                        onChange={handleInputChange}
                                        value={dateOfBirth}
                                    />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    <label htmlFor="eyeColour" className="form-label col-form-label-sm">COLOR DE OJOS</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="eyeColour"
                                        name="eyeColour"
                                        required
                                        placeholder="Color de ojos"
                                        onChange={handleInputChange}
                                        value={eyeColour}
                                    />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="hairColour" className="form-label col-form-label-sm">COLOR DE PELO</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="hairColour"
                                        name="hairColour"
                                        required
                                        placeholder="Color de pelo"
                                        onChange={handleInputChange}
                                        value={hairColour}
                                    />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-6">
                                    <label className="form-label col-form-label-sm">GÉNERO</label>
                                    <br />
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label" htmlFor="gender1">Mujer</label>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="gender1"
                                            value="female"
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label" htmlFor="gender2">Hombre</label>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="gender2"
                                            value="male"
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="nombre" className="form-label col-form-label-sm">POSICIÓN</label>
                                    <br />
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label" htmlFor="rol1">Estudiante</label>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="rol"
                                            id="rol1"
                                            value="student"
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label" htmlFor="rol2">Staff</label>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="rol"
                                            id="rol2"
                                            value="staff"
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center border-0">
                            <button type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary filter-button w-50">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterModal;
