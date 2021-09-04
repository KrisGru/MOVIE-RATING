import '../css/App.css';
import React from 'react';
import Pulpit from './Pulpit'

const API = 'https://www.omdbapi.com/?t=the+hunger+games&plot=full?i=tt3896198&apikey=b6fe8a66'
const API2 = [{api:'https://www.omdbapi.com/?t=pinocchio&plot=full?i=tt3896198&apikey=b6fe8a66', id: 1,}, {api:'https://www.omdbapi.com/?t=kick+ass&plot=full?i=tt3896198&apikey=b6fe8a66', id: 2,},
{api:'https://www.omdbapi.com/?t=die+hard&plot=full?i=tt3896198&apikey=b6fe8a66', id: 3,}, {api:'https://www.omdbapi.com/?t=american+pie&plot=full?i=tt3896198&apikey=b6fe8a66', id:4,},
 {api:'https://www.omdbapi.com/?t=hangover&plot=full?i=tt3896198&apikey=b6fe8a66', id:5,}, {api:'https://www.omdbapi.com/?t=made+of+honor&plot=full?i=tt3896198&apikey=b6fe8a66', id:6,}
]

class App extends React.Component {
  state = {
    title: "",
    searchTitle: "",
    pulpitTitle: [],
  }

  handleInput = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleClick= () => {
    const replace= () => this.state.title.replace(" ","+")
    const api = API.replace( "the+hunger+games", replace)
    return (
    this.handleFetch(api)
    )
  }

  handleFetch = (url) => {
  fetch(url)
  .then(response => {
    if(response.ok) {return response}
  })
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
          if (title.Response === 'False') {
            return null
          } else {
            const pulpitTitle = [...this.state.pulpitTitle]
            pulpitTitle.push(title)
            this.setState({
              pulpitTitle
            })
          }
          }
        )) )
  }

  render() {
  return (
    <>
      <div>
        <label> Wpisz tytuł: <input type="text" value={this.state.title} onChange={this.handleInput}/></label>
        <button onClick={this.handleClick}>Wyświetl info</button>
      </div>
      {this.state.searchTitle === "" ? null :
      <div className="div" key={this.state.searchTitle.imdbID}>
        <img src={this.state.searchTitle.Poster} alt="movie's poster"/>
        <h2>{this.state.searchTitle.Title}</h2>
        <p>{this.state.searchTitle.Genre}</p>
      </div>
    }
      <Pulpit pulpitTitle={this.state.pulpitTitle} searchTitle={this.state.searchTitle}/>
    </>
  );
  }
}

export default App;
