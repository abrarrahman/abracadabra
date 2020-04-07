import React, { useContext } from 'react';
import ThemeContext from './context/theme-context';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Card from './components/Card/Card';
import Projects from './components/Projects/Projects'
import classes from './App.module.css'

const App = props => {
  const theme = useContext(ThemeContext).theme;
  return (
    <div className={theme+' '+classes.App}>
      <div className={classes.firstPage}>
        <Navbar/>
        <Header/>
      </div>
      <div className={classes.secondPage}>
        <About/>
      </div>
      <Projects/>
      <Card>
        <h3>Notice: This project is still under construction... </h3>
        <p>Thank you for your interest! More features are being developed and will hopefully be added soon.</p>
      </Card>
    </div>
  );
}

export default App;
