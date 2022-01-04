import Movie from './Movie';

const ListMovies = ({ listMovies }) => (
  <section className="listMovies">
    <header className="listMovies__header">Recommmend</header>
    {listMovies.map(movie => <Movie key={movie.imdbID} movie={movie} /> )}
  </section>
)

export default ListMovies;
