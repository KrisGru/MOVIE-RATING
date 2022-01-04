import { useState, useEffect } from 'react';
import ListMovies from './ListMovies';
import Searching from './Searching';
import Nav from './Nav';
import Footer from './Footer';

const titles = ["orange is the new black", "peaky blinders", "vikings", "lucifer", "how i met your mother", "american pie"]

const App = () => {
  const [ listMovies, setListMovies] = useState([])
  //to know which component I clicked
  const [ showModalClick, setShowModalClick] = useState(false)
  const [ showModalID, setShowModalID] = useState("")

// Handle Fetch
  const handleFetch = (title) => {
    fetch("https://www.omdbapi.com/?t="+ title +"&plot=full&apikey=b6fe8a66")
    .then(response => response)
    .then(response => response.json())
    .then(title => {
      setListMovies(listMovies => [title, ...listMovies])
    })
  }
  console.log(listMovies)
// using fetch to display recommend movies
  useEffect(() => {
    titles.map(title => handleFetch(title))}, [])

  return (
    <div className="wrapper">
      <Searching
        handleFetch={() => handleFetch()}
        />
      <Nav />
      <ListMovies
        listMovies={listMovies}
        handleClickShowModal={(id) => {
          setShowModalID(id)
          setShowModalClick(!showModalClick) }}
        showModalClick={showModalClick}
        showModalID={showModalID}
        />
      <Footer />
    </div>
  );
}

export default App;
