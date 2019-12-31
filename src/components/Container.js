import React from 'react';

const Container = (props) => {
    return (
        <div className="container">
            <div className="notification">
                {props.children}
            </div>
        </div>
    )
};

export default Container;
