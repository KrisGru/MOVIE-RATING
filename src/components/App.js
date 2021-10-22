import { useState, useEffect } from 'react';
import ListMovies from './ListMovies';
import Searching from './Searching';
import Nav from './Nav';
import Footer from './Footer';

const titles = ["orange is the new black", "peaky blinders", "vikings", "lucifer", "how i met your mother", "american pie"]

const App = () => {
  const [ input, setInput] = useState("")
  const [ listMovies, setListMovies] = useState([])
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

// fetch on the recommmend movies in website, just for look
  useEffect(() => {
    titles.map(title => handleFetch(title))}, [])

  return (
    <div className="wrapper">
      <Searching
        input={input}
        handleSearchButton={() => {handleFetch(input); setInput('');}}
        handleInput={(e)=>setInput(e.target.value)}
        onKeyPress={(event)=> {if(event.key=== 'Enter'){handleFetch(input); setInput('');}}}
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
