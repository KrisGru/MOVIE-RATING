const Modal = ({ movie, handleClickShowModal }) => {

  return (
    <div className="background">
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
              <li className="modal__resultsItem">{movie.imdbRating}</li>
              <li className="modal__resultsItem">{movie.Metascore}</li>
              <li className="modal__resultsItem">{movie.Awards}</li>
            </ul>
          </header>
          <article className="modal__plot">{movie.Plot}</article>
          <section className="modal__buttons">
            <button className="modal__btnTrailer">Watch trailer</button>
            <button className="modal__btn">To Watch List</button>
          </section>
        </div>
      </div>
    </div>
  )}

export default Modal;
