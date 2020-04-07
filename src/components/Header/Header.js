import React,{useContext} from 'react';
import ThemeContext from '../../context/theme-context'
import classes from './Header.module.css';
import logoWand from '../../assets/logo/logo-white.png';
import logoText from '../../assets/logo/Abracadabra-white.png';

const Header = () => {
  let classesText = classes.logoText; 
  let classesWand = classes.logoWand;
  const isLight = useContext(ThemeContext).theme === 'light'
  if(isLight){
    classesText = classesText.concat(' '+classes.invert);
    classesWand = classesWand.concat(' '+classes.invert);
  }
  return(
    <header>
      <div className={classes.logo+' container'}>
        <img src={logoText} className={classesText} alt='Abracadabra text logo'/>
        <img src={logoWand} className={classesWand} alt='Abracadabra Magic Wand'/>
      </div>
    </header>
  )
}

export default Header;