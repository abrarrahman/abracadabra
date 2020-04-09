import React,{ useContext,useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import ThemeContext from '../../context/theme-context'
import classes from './Navbar.module.css';

import Backdrop from '../UI/Backdrop/Backdrop';

const Navbar = ({refs}) => {
  const { showThemeMenu, setTheme, toggleThemeMenu  } = useContext(ThemeContext);
  const [ hideNav, setHideNav ] = useState(false);
  const themeClasses = [classes.themeContainer];
  const navClasses = ['fixed-top'];

  useScrollPosition(({ prevPos, currPos })=>{
    console.log(currPos.y,prevPos.y);
    if(currPos.y === 0){
      console.log('top')
      setHideNav(false);
    }else if( currPos.y < prevPos.y ){//scrolling down
      console.log('scrolling down');
      setHideNav(true);
    }else if( currPos.y > prevPos.y ){//scrolling up
      console.log('scrolling up');
      setHideNav(false);
    }
  },[])
  const darkThemeHandler = () => {
    toggleThemeMenu();
    setTheme('dark');
  };
  const lightThemeHandler = () => {
    toggleThemeMenu();
    setTheme('light')
  };
  const scrollTo = ref => {
    ref.current.scrollIntoView({behavior: "smooth"});
  } 
  showThemeMenu
  ? themeClasses.push(classes.themeExpand)
  : themeClasses.push(classes.themeShrink)
  hideNav
  ? navClasses.push(classes.navShrink)
  : navClasses.push(classes.navExpand)

  return <React.Fragment>
     <nav className={navClasses.join(' ')}>
      <ul className='container'>
        <li 
          onClick={()=>scrollTo(refs.about)} 
          className={classes.NavItem}
        >
          About Me <i className="fas fa-hat-wizard d-none d-sm-inline"></i>
        </li>
        <li 
          onClick={()=>scrollTo(refs.projects)} 
          className={classes.NavItem}
        >
          Projects <i className="fas fa-archive d-none d-sm-inline"></i>
        </li>
        <li className={classes.NavItem}>
          Contact <i className="fas fa-address-card d-none d-sm-inline"></i>
        </li>
        <li 
          onClick={toggleThemeMenu} 
          className={classes.NavItem}
        >
          Theme <i className="fas fa-paint-brush"></i>
        </li>
        <div className={themeClasses.join(' ')}> 
      <span 
        className={classes.theme} 
        onClick={darkThemeHandler}
      >
      Dark <i className="fas fa-moon"></i>
      </span>
      <span 
        className={classes.theme} 
        onClick={lightThemeHandler}
      >
      Light <i className="far fa-lightbulb"></i>
      </span>
    </div>
      </ul>
    </nav>
    <Backdrop show={showThemeMenu} click={toggleThemeMenu}/>
  </React.Fragment>   
}

export default Navbar;