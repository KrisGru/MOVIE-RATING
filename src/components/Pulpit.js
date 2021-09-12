import '../css/pulpitAndMovie.scss';
import Movie from './Movie';

const Pulpit = (props) => {
  const movie = props.pulpitTitle.map(movie =>(
    <Movie
      title={movie.Title}
      category={movie.Genre}
      rating={movie.Ratings[0].Value}
      image={movie.Poster} key={movie.imdbID}
      id={movie.imdbID}
      handleClickShowModal={props.handleClickShowModal}
      showModal={props.showModal}
      idCheck={props.idCheck}/>
    ))

  return (
    <section className="pulpit">
      <header className="pulpit__header">Recommmend</header>
      {movie}
    </section>
  )
}

export default Pulpit;
