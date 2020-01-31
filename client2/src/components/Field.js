import React from 'react';


const Field = ({ label, touched, error, warning, type, value, handleChange }) => {



    return (
        <div>
            <label>{label}</label>
            <div>
                <input value={value} placeholder={label} type={type} onChange={handleChange} />
                {touched &&
                    ((error && <span>{error}!</span>) ||
                        (warning && <span>{warning}!</span>))}
            </div>
        </div>
    )
}

export default Field