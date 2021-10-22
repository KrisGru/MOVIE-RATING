import { BsYoutube } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { FaAward } from 'react-icons/fa'

const Modal = ({ movie, handleClickShowModal }) => {

  return (
    <div className="modalCont">
      <div className="modal" onClick={handleClickShowModal}>
        <img style={{width: "400px", height: "600px"}} className="modal__image" src={movie.Poster} alt="movie's poster" />
        <div className="modal__main">
          <header className="modal__info">
            <h1 className="modal__title">{movie.Title}</h1>
            <ul className="modal__categoryList" >
              <li className="modal__categoryItem">{movie.Genre}</li>
              <li className="modal__categoryItem">{movie.Runtime}</li>
              <li className="modal__categoryItem">{movie.Rated}</li>
            </ul>
            <ul className="modal__resultsList">
              <li className="modal__resultsItem"><AiFillHeart className="icons"/>{movie.imdbRating}</li>
              <li className="modal__resultsItem">{movie.Metascore}</li>
              <li className="modal__resultsItem"><FaAward className="icons icons__awards"/>{movie.Awards}</li>
            </ul>
          </header>
          <article className="modal__plot">{movie.Plot}</article>
          <section className="modal__buttons">
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><button className="modal__btnTrailer">Watch trailer<BsYoutube className="icons__youtube icons" /></button></a>
            <button className="modal__btn">To Watch List</button>
          </section>
        </div>
      </div>
      <div className="modalBackgroud"/>

  </div>
  )}

export default Modal;
