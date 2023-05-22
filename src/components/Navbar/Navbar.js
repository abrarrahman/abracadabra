import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import React, { useContext, useState } from "react";
import ThemeContext from "../../context/theme-context";
import classes from "./Navbar.module.css";

import Backdrop from "../UI/Backdrop/Backdrop";

const Navbar = ({ refs }) => {
  const { showThemeMenu, setTheme, toggleThemeMenu } = useContext(ThemeContext);
  const [hideNav, setHideNav] = useState(null);
  const themeClasses = [classes.themeContainer];
  const navClasses = ["fixed-top"];

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y === 0) {
      setHideNav(false);
    } else if (currPos.y < prevPos.y) {
      setHideNav(true);
    } else if (currPos.y > prevPos.y) {
      setHideNav(false);
    }
  }, []);
  const darkThemeHandler = () => {
    toggleThemeMenu();
    setTheme("dark");
  };
  const lightThemeHandler = () => {
    toggleThemeMenu();
    setTheme("light");
  };
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  if (showThemeMenu != null) {
    showThemeMenu
      ? themeClasses.push(classes.themeExpand)
      : themeClasses.push(classes.themeShrink);
  }
  if (hideNav != null) {
    hideNav
      ? navClasses.push(classes.navShrink)
      : navClasses.push(classes.navExpand);
  }
  return (
    <React.Fragment>
      <nav className={navClasses.join(" ")}>
        <ul className="container">
          <li onClick={() => scrollTo(refs.about)} className={classes.NavItem}>
            About Me <i className="fas fa-hat-wizard d-none d-sm-inline"></i>
          </li>
          <li
            onClick={() => scrollTo(refs.projects)}
            className={classes.NavItem}
          >
            Projects <i className="fas fa-archive d-none d-sm-inline"></i>
          </li>
          <li className={classes.NavItem}>
            Contact <i className="fas fa-address-card d-none d-sm-inline"></i>
          </li>
          <li onClick={toggleThemeMenu} className={classes.NavItem}>
            Theme <i className="fas fa-paint-brush"></i>
          </li>
        </ul>
        <div className={themeClasses.join(" ")}>
          <span className={classes.theme} onClick={darkThemeHandler}>
            Dark <i className="fas fa-moon"></i>
          </span>
          <span className={classes.theme} onClick={lightThemeHandler}>
            Light <i className="far fa-lightbulb"></i>
          </span>
        </div>
      </nav>
      <Backdrop show={showThemeMenu} click={toggleThemeMenu} />
    </React.Fragment>
  );
};

export default Navbar;
