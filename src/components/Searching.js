import '../css/searching.scss'
const Searching = (props) =>{

  return(
    <div>
      <label> Wpisz tytuł: <input type="text" value={props.title} onChange={props.handleInput}/></label>
      <button onClick={props.handleClick}>Wyświetl info</button>
    </div>
  )
}

export default Searching;
