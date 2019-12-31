import React from 'react';
import logo from './logo.svg';
import './App.css';
const Header = (props) => {
    return (<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Welcome to Recipes React App { props.name }
        </p>
        { props.children }
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
    </a>
    </header>);
};

export default Header; 