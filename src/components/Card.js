import React from 'react';
import Link from './Link';
import helper from '../services/helper.service';

const Card = (props) => {
    const { recipecode, title, coverphoto, views } = props.data;
    const { className, noLink } = props;
    return (
        <div className={className} >
            <div className="card curved">
                {coverphoto && (<div className="card-image">
                    <div className="image is-4by4">
                        <img src={coverphoto} alt="profile" className="curved-top" />
                    </div>
                </div>)}
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">
                                {!noLink && (<Link to={`recipe/${recipecode}`}>{title}</Link>)}
                                {noLink && title}
                            </p>
                            <p className="subtitle is-6">{ helper.kFormatter(views) } views</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;