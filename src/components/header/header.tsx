import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../logo/logo';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import { Film } from '../../types/film';

type HeaderProps = {
  currentFilm?: Film;
}

export default function Header({currentFilm}: HeaderProps) {

  const navigateToMyList = useNavigate();
  const location = useLocation();

  const isReviewPage = location.pathname.slice(-7) === '/review';

  const handleAvatarClick = () => {
    navigateToMyList(AppRoute.Favorites);
  };

  return (
    <header className="page-header film-card__head">
      <Logo />

      {isReviewPage && <Breadcrumbs currentFilm={currentFilm}/>}

      <ul className="user-block">
        <li className="user-block__item" onClick={handleAvatarClick}>
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link className="user-block__link" to="/">Sign out</Link>
        </li>
      </ul>
    </header>
  );
}
