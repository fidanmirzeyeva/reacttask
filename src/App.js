import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import './components/Navbar/Navbar.css';
import Reset from './components/Reset/Reset.css';
import Hero from './components/Hero/Hero.jsx';
import './components/Hero/Hero.css';
import Hero2 from './components/Hero2/Hero2.jsx';
import './components/Hero2/Hero2.css';
import Main from './components/Main/Main.jsx';
import './components/Main/Main.css';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Hero/>
      <Hero2/> 
      <Main/>
    </div>
  );
}

export default App;
