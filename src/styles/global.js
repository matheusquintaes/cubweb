import { createGlobalStyle } from "styled-components"

 const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300,400;600;700;800&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 300;
    text-rendering: optimizelegibility;
    color: var(--text-color);
    font-size: 16px;
    box-sizing: border-box;
    --title-color: #282C47;
    --text-color: #5B617C;
    --text-light: #A0AEC0;
    --main-color: #0064FE;
    --gray1: #f7fafc;
    --gray2: #edf2f7;
    --gray3: #e2e8f0;
    --gray4: #cbd5e0;
    --gray5: #a0aec0;
    --gray6: #718096;
    --gray7: #4a5568;
    --gray8: #2d3748;
    --gray9: #1a202c;
    --gray10: #1D2B3D;
    --bg-black: #000;
    --bg-white: #fff;
    --bg-light-blue: #DDEDFF;
  }

  a {
    color: var(--main-color);
    font-weight: 600;
    cursor: pointer;
  }
  
  .container {
    box-sizing: border-box;
    max-width: 1140px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .section{
    padding: 100px 0 100px 0;
  }  

  p {
    font-size: 18px;
    color: var(--text-color);
    line-height: 32px;
    margin: 0;
  }

  h1,h2,h3,h4,h5{
    margin: 0;
    color: var(--title-color);
  }

  a {
    text-decoration: none;
  }

`

export default GlobalStyles