
import { React } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contact';
import Portafolio from './components/pages/Portafolio';
import About from './components/pages/About';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component=
        {Home} />
        <Route path='/' exact component=
        {Contacts} />
        <Route path='/' exact component=
        {Portafolio} />
        <Route path='/' exact component=
        {About} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
