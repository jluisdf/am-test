import React from 'react'
import PropTypes from 'prop-types'

const Loader = (props) => {
    return (
        <div className="text-center loader">
            <div className="spinner-grow m-5 loader-spinner" role="status" id="">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader
