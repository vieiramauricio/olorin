import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import GlobalCharacter from './context/Character';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalCharacter>
      <App />
    </GlobalCharacter>
  </React.StrictMode>,
  document.getElementById('root')
);

