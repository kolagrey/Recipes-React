import React from 'react';

const Spacer = (props) => {
    return (
        <div className="container has-padding-bottom-30">
          {props.children}
        </div>
    )
};

export default Spacer;