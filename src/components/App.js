import { useState, useEffect } from 'react';
import React from 'react';
import ListMovies from './ListMovies';
import Searching from './Searching';
import Nav from './Nav';
import Footer from './Footer';

const API = 'https://www.omdbapi.com/?t=the+hunger+games&plot=full&apikey=b6fe8a66'
const API2 = ['https://www.omdbapi.com/?t=orange+is+the+new+black&plot=full&apikey=b6fe8a66', 'https://www.omdbapi.com/?t=vikings&plot=full&apikey=b6fe8a66', 'https://www.omdbapi.com/?t=how+i+met+your+mother&plot=full&apikey=b6fe8a66', 'https://www.omdbapi.com/?t=american+pie&plot=full&apikey=b6fe8a66',
'https://www.omdbapi.com/?t=lucifer&plot=full&apikey=b6fe8a66', 'https://www.omdbapi.com/?t=peaky+blinders&plot=full&apikey=b6fe8a66']

const App = () => {
  const [ input, setInput] = useState("")
  const [ listMovies, setListMovies] = useState([])
  const [ showModalClick, setShowModalClick] = useState(false)
  const [ showModalID, setShowModalID] = useState("")

//the method works only for 1/2 words in input. How I can change " " on "+" when I have more words?
  const handleSearchClick = () => {
    const a = input
    const replace = a.replace( " ", "+" )
    const api = API.replace( "the+hunger+games", replace)
    setInput('')
    return( handleFetch(api) )
  }

// Handle Fetch
  const handleFetch = (url) => {
  fetch(url)
  .then(response => response)
  .then(response => response.json())
  .then(title => {
    setListMovies((listMovies) => [title, ...listMovies])
    })
  }

// fetch on the recommmend movies in website, just for look
  useEffect(() => {
    API2.map(url => handleFetch(url))}, [])

  return (
    <div className="wrapper">
      {console.log(listMovies)}
      <Searching
        input={input}
        handleSearchClick={handleSearchClick}
        handleInput={(e)=>setInput(e.target.value)}/>
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
