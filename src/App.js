import './App.css';
import React from 'react';
import ShowInfo from './ShowInfo'

const API = 'https://www.omdbapi.com/?t=the+hunger+games&plot=full?i=tt3896198&apikey=b6fe8a66'

class App extends React.Component {
  state= {
    title: '',
    dataTitle: null,
    url: '',
  }

  handleDataFetch = (url) => {
  fetch(url)
  .then(response => response)
  .then(response => response.json())
  .then(respone => {
    this.setState({
      dataTitle: respone,
    })
  })
}

  handleInput = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleClick= () => {
    const title = this.state.title
    const a = "the+hunger+games"
    const b = () => {
      const changeTitle = title.replace(" ","+")
      return (changeTitle)
    }
    const url = API.replace( a, b)
    return (
    this.handleDataFetch(url)
    )
  }

  render() {
    console.log(this.state.dataTitle)
  return (
    <>
      <div>
        <label> Wpisz tytuł: <input type="text" value={this.state.title} onChange={this.handleInput}/></label>
        <button onClick={this.handleClick}>Wyświetl info</button>
      </div>
      {this.state.dataTitle ? <ShowInfo data={this.state.dataTitle}/> : null }
    </>
  );
}
}

export default App;
