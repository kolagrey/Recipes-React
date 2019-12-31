import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Categories from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';
import 'bulma/css/bulma.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/recipe/:id" component={Recipe} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
