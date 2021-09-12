import '../css/pulpitAndMovie.scss';
import Movie from './Movie';

const ListMovies = (props) => {
  const movie = props.listMovies.map(movie =>(
    <Movie
      title={movie.Title}
      category={movie.Genre}
      rating={movie.Ratings[0].Value}
      image={movie.Poster} key={movie.imdbID}
      id={movie.imdbID}
      handleClickShowModal={props.handleClickShowModal}
      showModalClick={props.showModalClick}
      showModalID={props.showModalID}/>
    ))

  return (
    <section className="listMovies">
      <header className="listMovies__header">Recommmend</header>
      {movie}
    </section>
  )
}

export default ListMovies;
