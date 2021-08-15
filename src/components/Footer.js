import React from 'react';
import Favorites from './Favorites';

const Footer = (props) => {
    return (
        <div className="row show-small">
            <div className="col-12 d-grid gap-2">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <Favorites />
                    <button type="button" className="btn btn-secondary btn-sm bkgd-purple">Agregar <i className="fas fa-user-plus"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Footer
