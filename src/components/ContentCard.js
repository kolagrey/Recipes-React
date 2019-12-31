import React from 'react';

const ContentCard = (props) => {
    const content = props.data;
    const { className, title } = props;
    return (
        <div className={className} >
            <div className="card curved">
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <div className="title is-4 has-padding-bottom-30">
                               { title }
                            </div>
                            <p className="subtitle is-6" dangerouslySetInnerHTML={{__html: content}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContentCard;