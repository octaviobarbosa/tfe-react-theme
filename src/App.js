import { useState } from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles"
import { lightTheme, darkTheme } from "./Themes"
import Box from './Box';
import sun from './assets/sun.png'
import moon from './assets/moon.png'
import Button from './Button';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Box>
            <div className='title'>
              <h1>Tarefa 5</h1>
              <button onClick={toggleTheme}><img src={theme === 'light' ? moon : sun } alt="theme" style={{width: "30px"}} /></button>
            </div>

            <h2>Sign up to my newsletter</h2>
            <br />
            <input type="text" name="email" style={{height: "30px"}}/><Button>Sign up</Button>
          </Box>
          
        </div>
      </>
    </ThemeProvider>
    
  );
}

export default App;
