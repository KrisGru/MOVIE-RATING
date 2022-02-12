import { BsYoutube } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { FaAward } from 'react-icons/fa';

const Modal = ({ movie, handleClickShowModal }) => (
  <div className="modalCont">
    <ModalView movie={movie} handleClickShowModal={handleClickShowModal}/>
    <div className="modalBackgroud">
    </div>
  </div>
)

export default Modal;

function ModalView({ movie, handleClickShowModal }) {
  const { Poster, Title, Genre, Runtime, Rated, Awards, imdbRating, Metascore, Plot } = movie
  return (
    <div className="modal" onClick={handleClickShowModal}>
      <img style={{width: "400px", height: "500px"}} className="modal__image" src={Poster} alt="movie's poster" />
      <div className="modal__main">
        <header className="modal__info">
          <h1 className="modal__title">{Title}</h1>
          <ul className="modal__categoryList" >
            <li className="modal__categoryItem">{Genre}</li>
            <li className="modal__categoryItem">{Runtime}</li>
            <li className="modal__categoryItem">{Rated}</li>
          </ul>
          <ul className="modal__resultsList">
            <li className="modal__resultsItem"><AiFillHeart className="icons"/>{imdbRating}</li>
            <li className="modal__resultsItem">{Metascore}</li>
            <li className="modal__resultsItem"><FaAward className="icons icons__awards"/>{Awards}</li>
          </ul>
        </header>
        <article className="modal__plot">{Plot}</article>
        <section className="modal__buttons">
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><button className="modal__btnTrailer">Watch trailer<BsYoutube className="icons__youtube icons" /></button></a>
          <button className="modal__btn">To Watch List</button>
        </section>
      </div>
    </div>
  )
}
