import Logo from "./../Header/logo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="wrapper">
          <div className="left-content">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="call-us">
              <i className="fa-solid fa-headphones-simple"></i>
              <div className="group-text">
                <span>Got Questions ? Call us 24/7!</span>
                <p>(800) 8001-8588, (0600) 874 548</p>
              </div>
            </div>
            <div className="contact-info">
              <b>Contact Info</b>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
              <ul className="social-icons">
                <li className="social-icon">
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className="social-icon">
                  <a href="">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
                <li className="social-icon">
                  <a href="">
                    <i className="fa-brands fa-pinterest"></i>
                  </a>
                </li>
                <li className="social-icon">
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li className="social-icon">
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="social-icon">
                  <a href="">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li className="social-icon">
                  <a href="">
                    <i className="fa-solid fa-wifi"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-content">
            <div className="list fint-it">
              <h5>Find It Fast</h5>
              <ul>
                <li>
                  <a href="">Laptops & Computers</a>
                </li>
                <li>
                  <a href="">Cameras & Photography</a>
                </li>
                <li>
                  <a href="">Smart Phones & Tablets</a>
                </li>
                <li>
                  <a href="">Video Games & Consoles</a>
                </li>
                <li>
                  <a href="">TV & Audio</a>
                </li>
                <li>
                  <a href="">Gadgets</a>
                </li>
                <li>
                  <a href="">Waterproof Headphones</a>
                </li>
              </ul>
            </div>
            <div className="list page">
              <h5>Notthing</h5>
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Wishlist</a>
                </li>
                <li>
                  <a href="">Compare</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Store Directory</a>
                </li>
              </ul>
            </div>
            <div className="list custom-care">
              <h5>Customer Care</h5>
              <ul>
                <li>
                  <a href="">My Account</a>
                </li>
                <li>
                  <a href="">Track your Order</a>
                </li>
                <li>
                  <a href="">Customer Service</a>
                </li>
                <li>
                  <a href="">Returns/Exchange</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">Product Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
