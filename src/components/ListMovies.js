import Movie from './Movie';

const ListMovies = ({ listMovies, handleClickShowModal, showModalClick, showModalID, searchTitle }) => (
  <section className="listMovies">
    <header className="listMovies__header">Recommmend</header>
    {listMovies.map(movie =>(
      <Movie
        key={movie.imdbID}
        movie={movie}
        handleClickShowModal={handleClickShowModal}
        showModalClick={showModalClick}
        showModalID={showModalID}
      />
    ))}
  </section>
)

export default ListMovies;
