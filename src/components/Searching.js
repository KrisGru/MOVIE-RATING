import logo from '../assets/logo.jpg';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs'

const Searching = ({ handleFetch, handleSearchButton, onKeyPress }) => {
  const [ input, setInput] = useState("");
  console.log(input)
return (
  <div className="searching">
    <a href="./" className="searching__link"><img src={logo} className="searching__image" alt="logo" /></a>
    <input className="searching__input" type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="search title" onKeyPress={(event)=> {if(event.key=== 'Enter'){handleFetch(input); setInput('');}}}/>
    <button className="searching__btnSearch" onClick={() => {handleFetch(input); setInput('');}}><BsSearch /></button>
    <button className="searching__btn">LOG IN</button>
    <button className="searching__btn">REGISTER</button>
  </div>
)
}

export default Searching;
