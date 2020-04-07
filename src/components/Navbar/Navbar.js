import React,{ useContext } from 'react';
import ThemeContext from '../../context/theme-context'
import classes from './Navbar.module.css';

const Navbar = props => {
  const { showThemeMenu, setTheme, toggleThemeMenu  } = useContext(ThemeContext)
  const themeClasses = [classes.themeContainer]

  const darkThemeHandler = () => {
    toggleThemeMenu();
    setTheme('dark');
  };
  const lightThemeHandler = () => {
    toggleThemeMenu();
    setTheme('light')
  };
  
  showThemeMenu
    ? themeClasses.push(classes.themeExpand)
    : themeClasses.push(classes.themeShrink)

  return <React.Fragment>
     <nav>
      <ul>
        <li onClick={toggleThemeMenu} className={classes.NavItem}>
          Theme
        </li>
        <li className={classes.NavItem+' muted'}>About Me</li>
        <li className={classes.NavItem+' muted'}>Projects</li>
        <li className={classes.NavItem+' muted'}>Contact</li>
      </ul>
    </nav>
    <div className={themeClasses.join(' ')}> 
      <span 
        className={classes.theme} 
        onClick={darkThemeHandler}
      >
       <i className="fas fa-moon"></i> Dark
      </span>
      <span 
        className={classes.theme} 
        onClick={lightThemeHandler}
      >
       <i className="far fa-lightbulb"></i> Light
      </span>
    </div>
  </React.Fragment>   
}

export default Navbar;