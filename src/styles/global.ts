import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #1F2229;
    --background2: #2E303C;
    --background-button: #373945;
    --background-button2: #4B4D59;
    --yellow: #FAE800;
    --gray: #a8a8b3;
    --white: #F4F4F4;
    --black: #3a3a3a;
    --red: #A30015;
  }
  *{
    margin:0;
    padding:0px;
    box-sizing:border-box;
    }

    html{

      @media (max-width:1080px){
       font-size: 93.75%;
      }

      @media (max-width:720px){
       font-size: 87.5%;
      }
    }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor:pointer;
  }

  body, input, textarea, button {
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-family:'Poppins', sans-serif;
    font-weight: 600;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
