import logo from "../assets/logo.png";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <img src={ logo } alt="logo" className="navbar__logo"/>
            <ul className="navbar__list">
                <li className="navbar__item1">
                    <a href="#">О месте</a>
                </li>
                <li className="navbar__item2">
                    <a href="#">Галерея</a>
                </li>
                <li className="navbar__item3">
                    <a href="#">Как добраться</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;