import './App.css';
import About from './components/About/About';
import BackToTop from './components/BackToTop/BackToTop';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Testimonial from './components/Testimonial/Testimonial';

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
          <Testimonial></Testimonial>
          <Contact></Contact>
        </main>
        {/* <Footer></Footer> */}
        <BackToTop></BackToTop>
      </>
    </div>
  );
}

export default App;
