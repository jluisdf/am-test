import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import profile from '../../resources/img/profile.png'

const List = () => {

    const { students } = useSelector(state => state.students);

    useEffect(() => {
        console.log("students", students);
    }, [students]);

    return (
        <div className="row mt-5">
            <div className="col-12 col-md-10 offset-md-1">
                <div className="row">
                    { students && students.length > 0 ?
                        students.map((student, i) =>
                            <div className="col-6" key={i}>
                                <div className="card mb-3 character-card">
                                    <div className="row g-0">
                                        <div className="col-12 col-md-12 col-lg-5 gradient-orange">
                                            <img src={student.image} className="rounded-circle center-image" alt="Cinque Terre" />
                                        </div>
                                        <div className="col-12 col-md-12 col-lg-7">
                                            <div className="card-body pt-2">
                                                <div className="hide-small">
                                                    <label className="opacity-25 mb-2 fz-14">VIVO / ESTUDIANTE</label>
                                                    <label className="opacity-25 mb-2 float-end cursor-pointer" onClick={() => console.log("hola")}>
                                                        <i className="far fa-bookmark"></i>
                                                    </label>
                                                    <h5 className="card-title">{student.name}</h5>
                                                    <ul className="list-unstyled fz-15">
                                                        <li><b>Cumpleaños:</b> {student.dateOfBirth}0</li>
                                                        <li><b>Género:</b> {student.gender}</li>
                                                        <li><b>Color de ojos:</b> {student.eyeColour}</li>
                                                        <li><b>Color de pelo:</b> {student.hairColour}</li>
                                                    </ul>
                                                </div>
                                                <div className="show-small">
                                                    <h5 className="card-title">Harry Potter</h5>
                                                    <label className="opacity-25 mb-2 fz-14">VIVO ESTUDIANTE</label>
                                                    <label className="opacity-25 mb-2 float-end cursor-pointer" onClick={() => console.log("hola")}>
                                                        <i className="far fa-bookmark"></i>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    :
                        <div className="alert alert-warning text-center" role="alert">
                            <strong>Sin registros</strong>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default List
