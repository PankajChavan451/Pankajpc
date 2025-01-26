import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import BroswerCards from './components/BrowserCards';
import ProductCards from './components/ProductCards';
import InternalDesignSlideShow from './components/InternalDesignSlideShow';
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <BroswerCards/>
      <ProductCards/>
      <InternalDesignSlideShow/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
