import '../css/pulpitAndMovie.scss';
import Modal from './Modal';

const Movie = (props) => {
console.log(props.movie)
  return (
    <>
    <section className="movies" id={props.id} onClick={() => props.handleClickShowModal(props.id) }>
      <img className="movies__image" src={props.image} alt="movie's poster"/>
      <h2 className="movies__title">{props.title}</h2>
      <p className="movies__category">{props.category}</p>
      <p className="movies__rating">{props.rating}</p>
    </section>
    {props.showModalID===props.id  && props.showModalClick ?
    <Modal /> : null}
    </>


    )
  }

export default Movie;
