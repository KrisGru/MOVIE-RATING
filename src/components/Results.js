
const Results =(props) => {
  const searchTitle = props.searchTitle

  return (
    <>
    {searchTitle === "" || searchTitle.Response === "False" ? null :
    <div className="div" key={searchTitle.imdbID}>
      <img src={searchTitle.Poster} alt="movie's poster"/>
      <h2>{searchTitle.Title}</h2>
      <p>{searchTitle.Genre}</p>
    </div>
    }
    </>

  )
}

export default Results;
