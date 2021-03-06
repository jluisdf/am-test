import React from 'react';
import Favorites from './Favorites';

const Navbar = (props) => {
    return (
        <div className="row hide-on-small">
            <div className="col-12">
                <div className="btn-group float-end" role="group" aria-label="Basic example">
                    <Favorites />
                    <button
                        type="button"
                        className="btn btn-secondary btn-sm bkgd-purple"
                        data-bs-toggle="modal"
                        data-bs-target="#registerModal"
                    >
                        Agregar <i className="fas fa-user-plus"></i>
                    </button>
                </div>
            </div>
            <br /><br />
        </div>
    )
}

export default Navbar
