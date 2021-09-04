const Pulpit =(props)=> {
  // const movies = [...props.pulpitTitle]
  // const searchTitle = props.searchTitle
  // console.log(searchTitle)

  return(
    props.pulpitTitle.map(movie => (
      <div className="div" key={movie.imdbID}>
        <img src={movie.Poster} alt="movie's poster"/>
        <h2>{movie.Title}</h2>
        <p>{movie.Genre}</p>
      </div>
    ))
  )
}

export default Pulpit;
