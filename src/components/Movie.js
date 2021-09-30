
import Modal from './Modal';

const Movie = (props) => (
    <>
      <section className="movies" id={props.id} onClick={() => props.handleClickShowModal(props.id) }>
        <img className="movies__image" src={props.image} alt="movie's poster"/>
        <h2 className="movies__title">{props.title}</h2>
        <p className="movies__category">{props.category}</p>
        <p className="movies__rating">{props.rating}</p>
      </section>
      {props.showModalID===props.id  && props.showModalClick ?
      <Modal
        title={props.title}
        category={props.category}
        rating={props.rating}
        imdbRating={props.imdbRating}
        image={props.image}
        id={props.id}
        rated={props.rated}
        runtime={props.runtime}
        score={props.score}
        awards={props.awards}
        plot={props.plot}
        handleClickShowModal={props.handleClickShowModal}
      />
      : null}
    </>
    )

export default Movie;
