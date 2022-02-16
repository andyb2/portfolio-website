import './Navbar.css';
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className="nav-item">
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                </li>
                <li className="nav-item">
                    <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar