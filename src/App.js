
import { React } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contact';
import Portafolio from './components/pages/Portafolio';
import About from './components/pages/About';
import Footer from './components/Footer';
// import SignUp from './components/pages/SignUp';
import Work from './components/pages/Work';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component=
            {Home} />
          <Route path='/Contact' exact component=
            {Contacts} />
          <Route path='/Portafolio' exact component=
            {Portafolio} />
          <Route path='/About' exact component=
            {About} />
          <Route path='/Work' exact component=
            {Work} />
          <Route path='/Footer' exact component=
            {Footer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
