import '../LandingPage/LandingPage.css'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react';
import LoginModal from '../LoginModal/LoginModal';
import SignupModal from '../SignupModal/SignupModal';
import Login from '../Login/Login';

function Navbar(){
    const [showList, setShowList] = useState(false);

    const handleNavClick = () => {
      setShowList(!showList);
    };
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    const handleLoginButtonClick = () => {
      setIsLoginModalOpen(true);
    };
    const handleSignupButtonClick
    = () => {
      setIsSignupModalOpen(true);
    };

    return(
        <nav className="my-navbar" style={{position:"fixed"}}>
        <div className="my-navbar-center">
          <div className="my-navbar-header">
            {/* <img src="../images/logo copy 1.jpg" className="my-navbar-logo" alt="navlogo"></img> */}
            <h3  className="my-navbar-logo"style={{display:"block",fontFamily:"cursive"}}>make<span style={{background:"#fe5c24",color:"#ffff",borderRadius:"4px"}}><i>your</i></span>trip<span style={{color:"#2493e0"}}>.</span></h3>
            <button type="button" className="my-navbar-toggle" id="my-navbar-toggle" onClick={handleNavClick}>
              <FaBars></FaBars>
            </button>
          </div>
          {/* Conditionally apply "show-list" class based on the state */}
          <ul className={`my-navbar-list ${showList ? "show-list" : ""}`} id="my-navbar-list" style={{marginBottom:"0rem"}}>
            <li><a style={{textDecoration:"none"}} href="#header" className="my-navbar-links scroll-link">home</a></li>
            <li><a href="#about" className="my-navbar-links scroll-link">about</a></li>
            <li><a href="#services" className="my-navbar-links scroll-link">services</a></li>
            <li><a href="#featured" className="my-navbar-links scroll-link">featured</a></li>
            <li><a href="#gallery" className="my-navbar-links scroll-link">gallery</a></li>
          </ul>
          {/* ... */}
          <div class="my-navbar-social-icons">
        <span>
          <a href="#" class="my-navbar-links-icon" style={{marginRight:"1rem"}} onClick={handleLoginButtonClick}>LogIn</a>
          {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}
        </span>
        <span>
          <a href="#" class="my-navbar-links-icon" onClick={handleSignupButtonClick}>SignUp</a>
          {isSignupModalOpen && <SignupModal onClose={() => setIsSignupModalOpen(false)} />}
        </span>
      </div>
        </div>
      </nav>
    )
}

export default Navbar;
