import React from 'react';
import Header from './components/header';
import { GlobalStyle } from './styles/global';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <GlobalStyle />
    </div>
  );
};

export default App;
