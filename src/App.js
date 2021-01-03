import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import CurrencyConverter from './components/CurrencyConverter';
import UnitConverter from './components/UnitConverter';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {  

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, []);

  return (
    <>
    {loading === false ? (
      <main>
        <Header />
        <Home />
        <About />
        <CurrencyConverter />
        <UnitConverter />
        <Footer />
      </main>
      ):(
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
