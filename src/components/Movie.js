import '../css/pulpitAndMovie.scss';

const Movie = (props) => {
  return (
    props.pulpitTitle.map(movie => (
      <section className="movies" key={movie.imdbID}>
        <img className="movies__image" src={movie.Poster} alt="movie's poster"/>
        <h2 className="movies__title">{movie.Title}</h2>
        <p className="movies__category">{movie.Genre}</p>
        <p className="movies__rating">{movie.Ratings[0].Value}</p>
      </section>
    )))
  }

export default Movie;
