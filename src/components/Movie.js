import '../css/pulpitAndMovie.scss';

const Movie = (props) => {

  return (
      <section className="movies" id={props.id} onClick={() => props.handleClickShowModal(props.id) }>
        <img className="movies__image" src={props.image} alt="movie's poster"/>
        <h2 className="movies__title">{props.title}</h2>
        <p className="movies__category">{props.category}</p>
        <p className="movies__rating">{props.rating}</p>
        {props.showModalID===props.id  && props.showModal ? <div>{props.id}</div> : null}
        <article>próba pull requesta. Co myślisz Seba? ;) miłej niedzieli!!!!</article>
      </section>
    )
  }

export default Movie;
