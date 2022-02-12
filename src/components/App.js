import { useState, useEffect } from 'react';
import ListMovies from './ListMovies';
import Searching from './Searching';
import Nav from './Nav';
import Footer from './Footer';
import ErrorMessage from './ErrorMessage';

const titles = ["orange is the new black", "peaky blinders", "vikings", "lucifer", "how i met your mother", "american pie"]

const App = () => {
  const [ listMovies, setListMovies] = useState([]);
  const [ errorModal, setErrorModal ] = useState({
    show: false,
    message: ""
  });

  // Handle Fetch
  const handleFetch = (title) => {
    fetch("https://www.omdbapi.com/?t="+title+"&plot=full&apikey=b6fe8a66")
    .then((res) => {
      if (res.ok) { 
        return res.json() 
      }
      else { throw new Error(res.statusText) }
    })
    .then(res => {
      console.log(res)
      if (res.Response==="True") {
      setListMovies(listMovies => [res, ...listMovies])
    } else {
        throw new Error(res.Response);
      }
    })
    .catch((error) => {
         setErrorModal({
           show: true,
           message: "No information about the movie with this title :(" 
          });
  })
}

// using fetch to display recommend movies
  useEffect(() => {
    titles.map(title => handleFetch(title))}, [])

  return (
    <div className="wrapper">
      <ErrorMessage errorModal={errorModal} setErrorModal={setErrorModal} />
      <Searching handleFetch = {handleFetch.bind()} />
      <Nav />
      <ListMovies listMovies={listMovies} />
      <Footer />
    </div>
  );
}

export default App;
