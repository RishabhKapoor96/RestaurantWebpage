import React from 'react';
import RestaurantList from './components/RestaurantList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
        </Routes>
      <RestaurantList />

      </div>
    </Router>
  );
};

export default App;

