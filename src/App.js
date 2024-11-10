import logo from '../src/logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Intro } from './Components/Intro.js';
import { Projects } from './Components/Projects.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
