import { IoMdArrowDropdown } from 'react-icons/io'

const Nav = () => (
    <div className="menu">
      <ul className="menu__list">
        <li className="menu__item"><a href=" " className="menu__link">in theaters</a></li>
        <li className="menu__item"><a href=" " className="menu__link">coming soon</a></li>
        <li className="menu__item"><a href=" " className="menu__link">charts</a></li>
        <li className="menu__item"><a href=" " className="menu__link">TV series</a></li>
        <li className="menu__item"><a href=" " className="menu__link">Trailers</a></li>
        <li className="menu__item"><a href=" " className="menu__link">More<IoMdArrowDropdown/></a></li>
      </ul>
    </div>
  )

export default Nav;
