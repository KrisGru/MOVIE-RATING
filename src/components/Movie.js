import Modal from './Modal';
import { AiFillHeart } from 'react-icons/ai';

const Movie = ({ movie, showModalID, showModalClick, handleClickShowModal }) => (
  <>
    <section className="movies" id={movie.imdbID} onClick={() => handleClickShowModal(movie.imdbID) }>
      <img className="movies__image" src={movie.Poster} alt="movie's poster"/>
      <h2 className="movies__title">{movie.Title}</h2>
      <p className="movies__category">{movie.Genre}</p>
      <p className="movies__rating"><AiFillHeart className="icons"/>{movie.Ratings[0].Value}</p>
    </section>
    {showModalID===movie.imdbID  && showModalClick ?
    <Modal
      movie={movie}
      handleClickShowModal={handleClickShowModal} />
    : null}
  </>
)

export default Movie;
