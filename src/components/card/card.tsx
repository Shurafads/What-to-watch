import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { MouseEvent } from 'react';
import { AppRoute } from '../../const';

type CardProps = {
  film: Film;
  onCardOver: (arg0: number) => void;
}

export default function Card({film, onCardOver}: CardProps) {

  const HandleCardOver = (evt: MouseEvent<HTMLElement>) => {
    if (evt.target) {
      onCardOver(film.id);
    }
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={(evt) => HandleCardOver(evt)}>
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}
