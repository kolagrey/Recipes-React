import React, { Component } from 'react';
import Link from './Link';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.changeAriaExpand = this.changeAriaExpand.bind(this);
        this.state = {
            ariaExpanded: false
        };
    }

    changeAriaExpand() {
        this.setState({
            ariaExpanded: this.state.ariaExpanded ? false : true
        });
    }

    render() {
        return (
            <nav className="navbar is-nav-fixed" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img src="https://dolapogrey.com/assets/images/header_logo_white.png" width="112" height="28" alt="RBDG" />
                    </Link>

                    <Link changeAriaExpand={this.changeAriaExpand} role="button" className="navbar-burger burger" ariaLabel="menu" ariaExpanded={this.state.ariaExpanded} dataTarget="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item">Home</Link>
                        <Link to="/categories" className="navbar-item">Categories</Link>
                        <Link to="/contact" className="navbar-item">Contact</Link>
                    </div>
                </div>
            </nav>
        );
    }

};

export default Nav;
