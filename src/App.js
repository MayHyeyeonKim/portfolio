import React, { useRef} from 'react';
import './App.scss';
import Navbar from './components/navbar';
import About from './components/about';
import Title from './components/title';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Awards from './components/awards';
import Footer from './components/footer';


function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const awardsRef = useRef(null);

  const handleScroll = (myTop) => {
    let Top = 0;
    if (myTop === 'about') {
      Top = aboutRef.current.offsetTop-60;
    } else if(myTop === 'skills'){
      Top = skillsRef.current.offsetTop - 60;
    } else if (myTop === 'portfolio') {
      Top = portfolioRef.current.offsetTop -60;
    } else if (myTop === 'awards') {
      Top = awardsRef.current.offsetTop -60;
    } 
    window.scrollTo({
      top: Top,
      behavior: "smooth"
    });
  }

  return (
    <>
      <Navbar handleScroll={ handleScroll}/>
      <Title/>
      <div className="container">
        <About refs={ aboutRef}/>
        <Skills refs={ skillsRef}/>
        <Awards refs={ awardsRef}/>
        <Portfolio refs={ portfolioRef}/>
      </div>
      <Footer handleScroll={handleScroll}/>
    </>
  );
}

export default App;
