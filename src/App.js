import './App.css';
import React from 'react';
import ShowInfo from './ShowInfo'

const API = 'https://www.omdbapi.com/?t=the+hunger+games&plot=full?i=tt3896198&apikey=b6fe8a66'

class App extends React.Component {
  state = {
    title: " ",
    dataTitle: " ",
  }

  handleInput = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleClick= () => {
    const title = this.state.title
    const b = () => title.replace(" ","+")
    const url = API.replace( "the+hunger+games", b)
    return (
    this.handleDataFetch(url)
    )
  }

  handleDataFetch = (url) => {
  fetch(url)
  .then(response => {
    if(response.ok) {
      return response
    }})
  .then(response => response.json())
  .then(dataTitle => {
    console.log(dataTitle.Response)
    if (dataTitle.Response === "True") {
      this.setState({
        dataTitle: dataTitle,
      })
    } else {
      this.setState({
        dataTitle: null,})
}})}

  render() {
  return (
    <>
      <div>
        <label> Wpisz tytuł: <input type="text" value={this.state.title} onChange={this.handleInput}/></label>
        <button onClick={this.handleClick}>Wyświetl info</button>
      </div>
      {this.state.dataTitle ? <ShowInfo data={this.state.dataTitle}/> : <h1>Wpisz tytuł!</h1>  }
    </>
  );
}
}

export default App;
