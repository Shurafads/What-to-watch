import { useState } from 'react';
import { Film } from '../../types/film';
import Card from '../card/card';

type CardListProps = {
  films: Film[];
}

export default function CardList({films}: CardListProps) {
  const [filmId, setFilmId] = useState<number>(-1);
  console.log(filmId);

  const onCardOver = (film: number) => {
    if (film) {
      setFilmId(film);
    }
  };

  return (
    <div className="catalog__films-list">
      {films && films.map((film) => <Card key={film.id} film={film} onCardOver={onCardOver} />)}
    </div>
  );
}
