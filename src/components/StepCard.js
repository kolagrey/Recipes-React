import React from 'react';

const StepCard = (props) => {
    const { description, photo, step } = props.data;
    const { className } = props;
    return (
        <div className={className} >
            <div className="card curved">
                {photo && (<div className="card-image">
                    <div className="image is-4by4">
                        <img src={photo} alt="profile" className="curved-top" />
                    </div>
                </div>)}
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">
                               Step {step}
                            </p>
                            <p className="subtitle is-6">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StepCard;