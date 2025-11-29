import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Packages from './sections/Packages';
import Gallery from './sections/Gallery';
import HowItWorks from './sections/HowItWorks';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <Gallery />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
