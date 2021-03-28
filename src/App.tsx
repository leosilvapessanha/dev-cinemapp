import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { GlobalStyle } from './styles/global';
import { FavoritsProvider } from './hooks/Favorites';

const App: React.FC = () => {
  return (
    <div className="App">
      <FavoritsProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </FavoritsProvider>
      <GlobalStyle />
    </div>
  );
};

export default App;
