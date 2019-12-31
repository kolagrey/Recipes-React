import React from 'react';

const FormErrorDisplay = (props) => {
    return (
        <p className="help is-danger">{ props.message }</p>
    );
};

export default FormErrorDisplay;