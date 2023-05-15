import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute } from '../../const';
import FilmPage from '../../pages/film-page/film-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import LoginPage from '../../pages/login-page/login-page';
import { Film } from '../../types/film';

type AppProps = {
  films: Film[];
  FavoriteFilms: Film[];
}

function App({films, FavoriteFilms}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage films={films}/>}
        />
        <Route
          path={`${AppRoute.Film}:id`}
          element={<FilmPage films={films}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={<MyListPage favoriteFilms={FavoriteFilms}/>}
        />
        <Route
          path={`${AppRoute.Film}:id/review`}
          element={<AddReviewPage films={films}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
