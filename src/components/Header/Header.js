import logo from "./logo.png";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="container">
        <div className="wrapper">
          <h1 onClick={() => navigate("/")} className="logo">
            <a href="">
              <img src={logo} alt="" />
            </a>
          </h1>
          <div className="wrapper-form">
            <div className="btn-showmore">
              <i className="fa-solid fa-bars"></i>
            </div>

            <form action="">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for Products"
              />
              <select>
                <option value="All Category">All Category</option>
                <option value="Accessories">Accessories</option>
                <option value="Camera-photography">
                  Cameras & Photography
                </option>
                <option value="Computer-components">Computer Components</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Home-entertainment">Home Entertainment</option>
                <option value="Laptops-computers">Laptops & Computers</option>
                <option value="Printers-ink">Printers & Ink</option>
                <option value="Phones-tablets">Smart Phones & Tablets</option>
                <option value="TV-audio">TV & Audio</option>
                <option value="Games-consoles">Video Games & Consoles</option>
                <option value="Stereo">Stereo</option>
                <option value="Home-theatre">Home Theatre</option>
                <option value="Bluetooth-speakers">Bluetooth Speakers</option>
                <option value="Headphones">Headphones</option>
                <option value="Speakers">Speakers</option>
              </select>
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <ul className="interact-icons">
            <li>
              <i className="fa-solid fa-code-compare"></i>
            </li>
            <li>
              <i className="fa-solid fa-heart"></i>
            </li>
            <li>
              <i className="fa-solid fa-user"></i>
            </li>
            <li>
              <i className="fa-solid fa-bag-shopping"></i>{" "}
              <span className="price">$0.00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
