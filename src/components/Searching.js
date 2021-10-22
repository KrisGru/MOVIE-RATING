import logo from '../assets/logo.jpg';
import { BsSearch } from 'react-icons/bs'

const Searching = ({ input, handleInput, handleSearchButton, onKeyPress }) => {

  return (
    <div className="searching">
      <a href="./" className="searching__link"><img src={logo} className="searching__image" alt="logo" /></a>
      <input className="searching__input" type="text" value={input} onChange={handleInput} placeholder="search title" onKeyPress={onKeyPress}/>
      <button className="searching__btnSearch" onClick={() =>handleSearchButton()}><BsSearch /></button>
      <button className="searching__btn">LOG IN</button>
      <button className="searching__btn">REGISTER</button>
    </div>
  )}

export default Searching;
