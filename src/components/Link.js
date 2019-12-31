import React from 'react';
const Link = (props) => {
    return (
        <a onClick={props.changeAriaExpand} href={props.to} className={props.className} role={props.role} aria-label={props.ariaLabel} aria-expanded={props.ariaExpanded} data-target={props.dataTarget}>
            { props.children}
        </a>
    );
};

export default Link;