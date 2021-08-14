import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { studentsActions } from './redux/actions/students.actions';
import './App.scss';
import profile from './resources/img/profile.png'
import { ReactComponent as Logo } from './resources/img/logo.svg';
import StudentsList from './components/students/List';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(studentsActions.get());
    }, []);

    return (
        <div className="body">
            <div className="container">
                <div className="row hide-small">
                    <div className="col-12">
                        <div className="btn-group float-end" role="group" aria-label="Basic example">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bkgd-purple" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Favoritos <i className="far fa-bookmark"></i>
                                </button>
                                <ul className="dropdown-menu mt-n5" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <button type="button" className="btn btn-secondary btn-sm bkgd-purple">Agregar <i className="fas fa-user-plus"></i></button>
                        </div>
                    </div>
                    <br /><br />
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <Logo style={{marginBottom: '-5%'}}  />
                    </div>
                </div>

                <div className="row">
                    <h3 className="text-center color-white mb-4">Selecciona tu filtro</h3>
                    <div className="col-6 col-md-3 offset-md-3 d-grid gap-2">
                        <button type="button" className="btn btn-secondary filter-button">ESTUDIANTES</button>
                    </div>
                    <div className="col-6 col-md-3 d-grid gap-2">
                        <button type="button" className="btn btn-secondary filter-button">STAFF</button>
                    </div>
                </div>

                <StudentsList />

                <div className="row show-small">
                    <div className="col-12 d-grid gap-2">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle bkgd-purple"
                                    type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                                >
                                    Favoritos <i className="far fa-bookmark"></i>
                                </button>
                                <ul className="dropdown-menu mt-n5" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <button type="button" className="btn btn-secondary btn-sm bkgd-purple">Agregar <i className="fas fa-user-plus"></i></button>
                        </div>
                    </div>
                </div>

                <br />
            </div>
        </div>
    );
}

export default App;
