import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import { Film } from '../../types/film';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';
import CardList from '../../components/card-list/card-list';

type FilmPageProps = {
  films: Film[];
};

export default function FilmPage({films}: FilmPageProps) {
  const params = useParams();
  const redirect = useNavigate();

  const currentFilm = films.find((film) => film.id === Number(params.id));

  if (!currentFilm) {
    redirect(AppRoute.Main);
    return null;
  }

  const ratingTitle = () => {
    if (currentFilm.rating <= 2) {
      return 'Bad';
    }
    if (currentFilm.rating <= 4) {
      return 'Normal';
    }
    if (currentFilm.rating <= 6) {
      return 'Good';
    }
    if (currentFilm.rating <= 8) {
      return 'Very good';
    }
    return 'Awesome';
  };

  const starringList = currentFilm.starring.reduce((acc, star) => `${acc} ${star}, `, '').slice(0, -2);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`${AppRoute.Film}${currentFilm.id}/review`} className="btn film-card__button" >Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link to="#" className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{currentFilm.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{ratingTitle()}</span>
                  <span className="film-rating__count">{`${currentFilm.scoresCount} ratings`}</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{currentFilm.description}</p>

                <p className="film-card__director"><strong>{`Director: ${currentFilm.director}`}</strong></p>

                <p className="film-card__starring"><strong>{`Starring: ${starringList} and other`}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CardList films={films}/>

        </section>

        <Footer />

      </div>
    </>
  );
}
