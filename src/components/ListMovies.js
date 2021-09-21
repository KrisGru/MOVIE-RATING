
import Movie from './Movie';

const ListMovies = (props) => (
    <section className="listMovies">
      <header className="listMovies__header">Recommmend</header>
      {props.listMovies.map(movie =>(
        <Movie
          title={movie.Title}
          category={movie.Genre}
          rating={movie.Ratings[0].Value}
          imdbRating={movie.imdbRating}
          image={movie.Poster} key={movie.imdbID}
          id={movie.imdbID}
          rated={movie.Rated}
          runtime={movie.Runtime}
          score={movie.Metascore}
          awards={movie.Awards}
          plot={movie.Plot}
          handleClickShowModal={props.handleClickShowModal}
          showModalClick={props.showModalClick}
          showModalID={props.showModalID}
          />
        ))}
    </section>
  )

export default ListMovies;
