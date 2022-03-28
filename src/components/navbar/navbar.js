import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <img src={ logo } alt="logo" className="navbar__logo"/>
            <ul className="navbar__list">
                <li className="navbar__item1">
                    <Link to="/">О месте</Link>
                </li>
                <li className="navbar__item2">
                    <Link to="/gallery">Галерея</Link>
                </li>
                <li className="navbar__item3">
                    <Link to="/howTo">Как добраться</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;