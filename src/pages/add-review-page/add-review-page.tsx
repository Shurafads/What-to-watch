import { Film } from '../../types/film';
import Header from '../../components/header/header';
import { useParams } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import Star from '../../components/star/star';
import { StarsCount } from '../../const';

type AddReviewPageProps = {
  films: Film[];
};

export default function AddReviewPage({films}: AddReviewPageProps) {
  const params = useParams();
  const currentFilm = films.find((film) => film.id === Number(params.id));
  const [userComment, setUserComment] = useState({review: '', rating: '0'});

  const handleChangeForm = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {value, name} = target;

    setUserComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const cleanForm = () => {
    setUserComment({review: '', rating: '0'});
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    cleanForm();
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header currentFilm={currentFilm}/>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={handleSubmitForm}>
          <div className="rating">
            <div className="rating__stars">
              {StarsCount.map((number) => <Star key={number} star={number} number={number} value={userComment.rating} onChange={handleChangeForm}/>).reverse()}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review" id="review"
              placeholder="Review text"
              value={userComment.review}
              onChange={handleChangeForm}
              // disabled={isTextAreaDisabled}
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>

    </section>
  );
}
