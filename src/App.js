import React, { useContext, useRef } from 'react';
import ThemeContext from './context/theme-context';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Card from './components/UI/Card/Card';
import Projects from './components/Projects/Projects'
import classes from './App.module.css'

const App = props => {
  const theme = useContext(ThemeContext).theme;
  const refs = {
    top: useRef(),
    about: useRef(),
    projects: useRef(),
  }
  return (
    <div className={theme+' '+classes.App} ref={refs.top}>
      <div className={classes.firstPage}>
        <Navbar refs={refs}/>
        <Header/>
      </div>
      <div className={classes.secondPage} ref={refs.about}>
        <About/>
      </div>
      <Projects ref={refs.projects}/>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-auto' style={{cursor: 'pointer'}} onClick={()=>refs.top.current.scrollIntoView({behavior: "smooth"})}>
            <div className={classes.topArrow}></div>
            <p>Back to top</p>
          </div>
        </div>
      </div>
      <Card>
        <h3>Notice: This project is still under construction... </h3>
        <p>Thank you for your interest! More features are being developed and will hopefully be added soon.</p>
      </Card>
    </div>
  );
}

export default App;
