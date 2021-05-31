import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Editions from './components/Editions';
import Print from './components/Print';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true, 
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 3,
                color: "#fff"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Editions />
      <Print />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
