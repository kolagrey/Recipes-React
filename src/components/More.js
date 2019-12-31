import React from 'react';

const More = (props) => {
    return (
        <div className="row">
            <div className="column is-vcentered has-text-centered">
                <button onClick={props.getMoreRecipe} className={props.buttonState(props.loading)}>More</button>
            </div>
        </div>
    );
};

export default More;