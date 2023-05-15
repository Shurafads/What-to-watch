import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Film } from '../../types/film';
import CardList from '../../components/card-list/card-list';

type MyListPageProps = {
  favoriteFilms: Film[];
}

export default function MyListPage({favoriteFilms}: MyListPageProps) {

  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CardList films={favoriteFilms}/>
      </section>

      <Footer />
    </div>
  );
}
