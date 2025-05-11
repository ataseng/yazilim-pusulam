import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    return (
        <nav id="navbar">
            <img src={logo} alt="logo" />
            <ul>
                <li>
                    <a href="#">Anasayfa</a>
                </li>
                <li>
                    <a href="#">Kurslar</a>
                </li>
                <li>
                    <a href="#">Mentorluk</a>
                </li>
                <li>
                    <a href="#">Hakkımızda</a>
                </li>
                <li>
                    <a href="#">İletişim</a>
                </li>
            </ul>
            <button>SIGN UP</button>
        </nav>
    )
}

export default Navbar