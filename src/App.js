import logo from '../src/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Intro } from './Components/Intro.js';
import { Projects } from './Components/Projects.js';
import AboutMe from './Components/AboutMe.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path='/' element = {<>
            <Banner />
            <Intro />
            <Projects />
          </>}/>

          <Route path='/about-me' element={<AboutMe />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
