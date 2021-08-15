import React from 'react';
import Favorites from './Favorites';

const Footer = (props) => {
    return (
        <div className="row">
            <div className="col-6 d-grid gap-2">
                <Favorites />
            </div>
            <div className="col-6 d-grid gap-2">
                <button
                    type="button"
                    className="btn btn-secondary btn-sm bkgd-purple w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#registerModal"
                >
                    Agregar <i className="fas fa-user-plus"></i>
                </button>
            </div>
        </div>
    )
}

export default Footer
