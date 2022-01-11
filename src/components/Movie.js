import { useState } from 'react';
import Modal from './Modal';
import { AiFillHeart } from 'react-icons/ai';

const Movie = ({ movie }) => {
  const [ showModalClick, setShowModalClick] = useState(false)
  const [ showModalID, setShowModalID] = useState("")

  const handleClickShowModal = (id) => {setShowModalID(id); setShowModalClick(!showModalClick)};
  return (
    <>
      <section className="movies" id={movie.imdbID} onClick={() => handleClickShowModal(movie.imdbID) }>
        <img className="movies__image" src={movie.Poster} alt="movie's poster"/>
        <h2 className="movies__title">{movie.Title}</h2>
        <p className="movies__category">{movie.Genre}</p>
        <p className="movies__rating"><AiFillHeart className="icons"/>{movie.Ratings[0].Value? movie.Ratings[0].Value : null }</p>
      </section>
    {showModalID === movie.imdbID  && showModalClick ? <Modal movie={movie} handleClickShowModal={handleClickShowModal} /> : null}
    </>
  )
}

export default Movie;
