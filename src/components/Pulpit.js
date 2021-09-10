import '../css/pulpitAndMovie.scss';
import Movie from './Movie';

const Pulpit =(props)=> {

  return(
    <section className="pulpit">
      <header className="pulpit__header">Recommmend</header>
      <Movie pulpitTitle={props.pulpitTitle} />
    </section>
  )
}

export default Pulpit;
