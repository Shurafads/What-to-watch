import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/film';
import { AppRoute } from '../../const';

type BreadcrumbsProps = {
  currentFilm?: Film;
}

export default function Breadcrumbs({currentFilm}: BreadcrumbsProps) {
  const redirect = useNavigate();

  if (!currentFilm) {
    redirect(AppRoute.Main);
    return null;
  }

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`${AppRoute.Film}${currentFilm.id}`} className="breadcrumbs__link">{currentFilm?.name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <div className="breadcrumbs__link">Add review</div>
        </li>
      </ul>
    </nav>
  );
}
