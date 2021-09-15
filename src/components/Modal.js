

const Modal = (props) => (
    <div className="modal" onClick={props.handleClickShowModal}>
      <img className="modal__image" src={props.image} alt="movie's poster" />
      <div className="modal__info">
        <header className="modal__rating">
          <h1 className="modal__title">{props.title}</h1>
          <p className="modal__category">{props.category}</p>
          <p className="modal__runtime">{props.runtime}</p>
          <p className="modal__runtime">{props.rated}</p>
        </header>
        <article className="modal__plot">{props.plot}</article>
        <section className="modal__buttons">
          <p className="modal__btnTrailer">Watch trailer</p>
          <p className="modal__btn">To Watch List</p>
        </section>
      </div>
    </div>
  )

export default Modal;
