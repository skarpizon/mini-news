import React from 'react';
import './spinner.scss'

const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="lds-ring-big">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Spinner;

