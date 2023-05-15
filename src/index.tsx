import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Films } from './mocks/films';
import { FavoriteFilms } from './mocks/favorites-films';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App films={Films} FavoriteFilms={FavoriteFilms} />
  </React.StrictMode>,
);
