import React, { useState } from 'react';

const ThemeContext = React.createContext({
  theme: '',
  showThemeMenu: null,
  setTheme: theme => {},
  toggleThemeMenu: () => {}
})

export const ThemeContextProvider = props => {
  const [ theme, setTheme ] = useState('light');
  const [ showThemeMenu, setShowThemeMenu ] = useState(null);


  const setThemeHandler = theme => {
    setTheme(theme)
  }
  const toggleThemeMenuHandler = () => {
    setShowThemeMenu( prev=> !prev )
  }

  return <ThemeContext.Provider value={{
    theme: theme,
    showThemeMenu: showThemeMenu,
    setTheme: setThemeHandler,
    toggleThemeMenu: toggleThemeMenuHandler
  }}>
    {props.children}
  </ThemeContext.Provider>
}

export default ThemeContext;