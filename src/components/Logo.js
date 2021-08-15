import React from 'react';
import { ReactComponent as LogoSvg } from '../resources/img/logo.svg';

const Logo = (props) => {
    return (
        <div className="row">
            <div className="col-12 text-center">
                <LogoSvg style={{marginBottom: '-5%'}}  />
            </div>
        </div>
    )
}

export default Logo
