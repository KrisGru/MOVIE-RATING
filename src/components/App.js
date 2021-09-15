
import React from 'react';
import ListMovies from './ListMovies';
import Searching from './Searching';
import Nav from './Nav';
import Footer from './Footer';

const API = 'https://www.omdbapi.com/?t=the+hunger+games&plot=full&apikey=b6fe8a66'
const API2 = [{api:'https://www.omdbapi.com/?t=orange+is+the+new+black&plot=full&apikey=b6fe8a66', id: 1,}, {api:'https://www.omdbapi.com/?t=vikings&plot=full&apikey=b6fe8a66', id: 2,},
{api:'https://www.omdbapi.com/?t=how+i+met+your+mother&plot=full&apikey=b6fe8a66', id: 3,}, {api:'https://www.omdbapi.com/?t=american+pie&plot=full&apikey=b6fe8a66', id:4,},
 {api:'https://www.omdbapi.com/?t=lucifer&plot=full&apikey=b6fe8a66', id:5,}, {api:'https://www.omdbapi.com/?t=peaky+blinders&plot=full&apikey=b6fe8a66', id:6,}
]

class App extends React.Component {
  state = {
    input: "",
    searchTitle: "",
    listMovies: [],
    showModalClick: false,
    showModalID: "",
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSearchClick= () => {
    const replace= () => this.state.input.replace(" ","+")
    const api = API.replace( "the+hunger+games", replace)
      this.setState({
        input: '',
      })
    return (
    this.handleFetch(api)
    )
  }

  handleFetch = (url) => {
  fetch(url)
  .then(response => response)
  .then(response => response.json())
  .then(title => {
      this.setState({
      searchTitle: title,
      })
    })}

  componentDidMount() {
    API2.map(movie => (
      fetch(movie.api)
      .then(response => response.json())
      .then(title => {
          if (title.Response === 'False') { return null
          } else {
            const listMovies = [...this.state.listMovies]
            listMovies.push(title)
            this.setState({
              listMovies
              })
            }
        }
      ))
    )
  }

  handleClickShowModal = (id) => {
    this.setState({
      showModalClick: !this.state.showModalClick,
      showModalID: id,
    })
  }

  render() {
  return (
    <div className="wrapper">
      <Searching
        input={this.state.input}
        handleSearchClick={this.handleSearchClick}
        handleInput={this.handleInput}/>
      <Nav />
      <ListMovies
        listMovies={this.state.listMovies}
        searchTitle={this.state.searchTitle}
        handleClickShowModal={this.handleClickShowModal}
        showModalClick={this.state.showModalClick}
        showModalID={this.state.showModalID}/>
      <Footer />
    </div>
  );
  }
}

export default App;
