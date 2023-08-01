import "../LandingPage/LandingPage.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";


function Footer() {
  return (
   <footer className="footer general-section">
         <ul className="footer-list">
            <li><a href="#header" className="footer-links scroll-link">home</a></li>
            <li><a href="#about" className="footer-links scroll-link">about</a></li>
            <li><a href="#services" className="footer-links
              scroll-link">services</a></li>
            <li><a href="#featured" className="footer-links scroll-link">featured</a></li>
            <li><a href="#gallery" className="footer-links scroll-link">gallery</a></li>
          </ul>

        <div className="social-icons">
          <span>
            <a href="#" className="footer-links-icon"><AiFillTwitterCircle></AiFillTwitterCircle></a>
          </span>
          <span>
            <a href="#" className="footer-links-icon"><BsFacebook></BsFacebook></a>
          </span>
          <span>
            <a href="#" className="footer-links-icon"><AiFillInstagram></AiFillInstagram></a>
          </span>
        </div>
        <div className="copyright">
          <p>copyright &copy; gotravel tour company <span id="date">2023</span> all rights reserved</p>
        </div>
   </footer>
  );
}

export default Footer;


