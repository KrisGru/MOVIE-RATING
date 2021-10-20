import logo from '../assets/logo.jpg';

const Searching = ({ input, handleInput, handleSearchButton, onKeyPress }) => {

  return (
    <div className="searching">
      <a href="./" className="searching__link"><img src={logo} className="searching__image" alt="logo" /></a>
      <input className="searching__input" type="text" value={input} onChange={handleInput} placeholder="search title" onKeyPress={onKeyPress}/>
      <button className="searching__btn" onClick={() =>handleSearchButton()}>Search</button>
      <p className="searching__p">Log in</p>
      <p className="searching__p">Create acount</p>
    </div>
  )}

export default Searching;
