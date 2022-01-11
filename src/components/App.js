import { useState, useEffect } from 'react';
import ListMovies from './ListMovies';
import Searching from './Searching';
import Nav from './Nav';
import Footer from './Footer';
import ErrorMessage from './ErrorMessage';

const titles = ["orange is the new black", "peaky blinders", "vikings", "lucifer", "how i met your mother", "american pie"]

const App = () => {
  const [ listMovies, setListMovies] = useState([]);
  //in one state? Think about it
  const [ showErrorModal, setShowErrorModal ] = useState(false);
  const [ errorText, setErrorText ] = useState([]);

  // Handle Fetch
  const handleFetch = (title) => {
    fetch("https://www.omdbapi.com/?t="+title+"&plot=full&apikey=b6fe8a66")
    .then((res) => {
      if (res.ok) { return res.json() }
      else { throw new Error(res.statusText) }
    })
    .then(title => {
      if (title.Response==="True") {
      setListMovies(listMovies => [title, ...listMovies])
    } else {
        throw new Error(title.Response);
      }
    })
    .catch((error) => {
         setShowErrorModal(true);
         setErrorText("No information about the movie with this title :(")
    })
  }

// using fetch to display recommend movies
  useEffect(() => {
    titles.map(title => handleFetch(title))}, [])

  return (
    <div className="wrapper">
      <ErrorMessage show={showErrorModal} handleClose={()=>setShowErrorModal(false)} errorText={errorText}/>
      <Searching handleFetch = {handleFetch.bind()} />
      <Nav />
      <ListMovies listMovies={listMovies} />
      <Footer />
    </div>
  );
}

export default App;
