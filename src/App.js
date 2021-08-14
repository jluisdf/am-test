import './App.scss';
import profile from './resources/img/profile.png'
import { ReactComponent as Logo } from './resources/img/logo.svg';

function App() {
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

                <div className="row mt-5">
                    <div className="col-12 col-md-10 offset-md-1">
                        <div className="row">
                            {[...Array(6)].map((x, i) =>
                                <div className="col-6" key={i}>
                                    <div className="card mb-3 character-card">
                                        <div className="row g-0">
                                            <div className="col-12 col-md-12 col-lg-5 gradient-orange">
                                                <img src={profile} className="rounded-circle center-image" alt="Cinque Terre" />
                                            </div>
                                            <div className="col-12 col-md-12 col-lg-7">
                                                <div className="card-body pt-2">
                                                    <div className="hide-small">
                                                        <label className="opacity-25 mb-2 fz-14">VIVO / ESTUDIANTE</label>
                                                        <label className="opacity-25 mb-2 float-end cursor-pointer" onClick={() => console.log("hola")}>
                                                            <i className="far fa-bookmark"></i>
                                                        </label>
                                                        <h5 className="card-title">Harry Potter</h5>
                                                        <ul className="list-unstyled fz-15">
                                                            <li><b>Cumpleaños:</b> 31-07-1980</li>
                                                            <li><b>Género:</b> Male</li>
                                                            <li><b>Color de ojos:</b> Green</li>
                                                            <li><b>Color de pelo:</b> Black</li>
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
                            )}
                        </div>
                    </div>
                </div>

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
