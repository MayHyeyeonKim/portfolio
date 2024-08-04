import React, { useRef} from 'react';
import './App.scss';
import Navbar from './components/navbar';
import About from './components/about';
import Title from './components/title';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Footer from './components/footer';


function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  // const handleFollow = () => {
  //   setScrollY(window.pageYOffset);
  // }
  

  // useEffect(() => {
  //   const watch = () => {
  //     window.addEventListener('scroll', handleFollow);
  //   }
  //   watch();
  //   return () => {
  //     window.removeEventListener('scroll', handleFollow);
  //   }
  // })

  const handleScroll = (myTop) => {
    let Top = 0;
    if (myTop === 'about') {
      Top = aboutRef.current.offsetTop-60;
    } else if(myTop === 'skills'){
      Top = skillsRef.current.offsetTop - 60;
    } else if (myTop === 'portfolio') {
      Top = portfolioRef.current.offsetTop -60;
    } 
    window.scrollTo({
      top: Top,
      behavior: "smooth"
    });
    // setScrollY(Top);
  }

  // .current.offsetTop-200
  // .current: useRef 훅으로 생성된 참조 객체의 current 속성
  // .offsetTop: DOM 요소의 offsetTop 속성은 해당 요소의 상단이 가장 가까운 상대적으로 배치된 조상 요소의 상단에서부터 얼마나 떨어져 있는지
  // -200: 만약에 About Me라면 이 요소 가로 정중앙이 0이고 위로 200만큼 떨어진 곳

  return (
    <>
      <Navbar handleScroll={ handleScroll}/>
      <Title/>
      <div className="container">
        <About refs={ aboutRef}/>
        <Skills refs={ skillsRef}/>
        <Portfolio refs={ portfolioRef}/>
      </div>
      <Footer handleScroll={handleScroll}/>
    </>
  );
}

export default App;
