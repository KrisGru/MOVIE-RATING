

const Modal = (props) => (
  <div className="background">
  <div className="modal" onClick={props.handleClickShowModal}>
    <img style={{
      width: "400px",
      height: "600px",
      }}
      className="modal__image" src={props.image} alt="movie's poster"
    />
    <div className="modal__main">
      <header className="modal__info">
        <h1 className="modal__title">{props.title}</h1>
        <ul className="modal__categoryList" >
          <li className="modal__categoryItem">{props.category}</li>
          <li className="modal__categoryItem">{props.runtime}</li>
          <li className="modal__categoryItem">{props.rated}</li>
        </ul>
        <ul className="modal__resultsList">
          <li className="modal__resultsItem">{props.imdbRating}</li>
          <li className="modal__resultsItem">{props.score}</li>
          <li className="modal__resultsItem">{props.awards}</li>
        </ul>
      </header>
      <article className="modal__plot">{props.plot}</article>
      <section className="modal__buttons">
        <button className="modal__btnTrailer">Watch trailer</button>
        <button className="modal__btn">To Watch List</button>
      </section>
    </div>
  </div>
  </div>

  )

export default Modal;
