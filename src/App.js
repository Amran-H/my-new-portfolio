import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <>
        <Navbar></Navbar>
        <main>
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Portfolio></Portfolio>
        </main>
      </>
    </div>
  );
}

export default App;
