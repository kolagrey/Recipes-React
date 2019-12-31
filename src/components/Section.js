import React from 'react';

const Section = (props) => {
    return (
        <section className="section has-padding-top-10">
            {props.children}
        </section>
    );
};

export default Section;