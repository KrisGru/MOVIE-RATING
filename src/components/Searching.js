import logo from '../inne/logo.jpg';
import '../css/searching.scss';

const Searching = (props) => {

  return (
    <div className="searching">
      <img src={logo} className="searching__image" alt="logo" />
      <input className="searching__input" type="text" value={props.title} onChange={props.handleInput} placeholder="search title"/>
      <button className="searching__btn" onClick={props.handleClick}>Search</button>
      <p className="searching__p">Log in</p>
      <p className="searching__p">Create acount</p>
    </div>
  )
}

export default Searching;
