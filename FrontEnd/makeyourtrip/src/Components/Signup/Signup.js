import '../Login/Login.css';
import { useState } from 'react';

  const Signup = () => {
    const [isLogin, setIsLogin] = useState(true);
  
    const handleSlideChange = () => {
      setIsLogin(!isLogin);
    };

  return (
    <div className="login-wrapper">
  {/* <div> */}
<div className="login-title-text">
        <div className={`login-title ${isLogin ? 'login-form-title' : 'signup-form-title'}`}>
          {isLogin ? 'Register' : 'Register'}
        </div>
      </div>
      <div className="login-form-container">
        <div className="login-slide-controls">
          <input
            type="radio"
            name="login-slide"
            id="login"
            checked={isLogin}
            onChange={handleSlideChange}
          />
          <input
            type="radio"
            name="login-slide"
            id="signup"
            checked={!isLogin}
            onChange={handleSlideChange}
          />
          <label htmlFor="login" className={`login-slide ${isLogin ? 'login' : 'signup'}`}>
            Traveller
          </label>
          <label htmlFor="signup" className={`login-slide ${isLogin ? 'signup' : 'login'}`}>
            Agent
          </label>
          <div className={`login-slider-tab ${isLogin ? 'login' : 'signup'}`}></div>
        </div>
        <div className={`login-form-inner ${isLogin ? 'login-form' : 'signup-form'}`}>
          <form action="#" className={`login-form ${isLogin ? 'login' : 'signup'}`}>
          {!isLogin && (
          <div className="login-field">
          <input type="password" placeholder="Username" required />
          </div>
            )}
            <div className="login-field">
              <input type="text" placeholder="Email Address" required />
            </div>
            {!isLogin && (
            <div className="login-field">
            <input type="password" placeholder="PhoneNumber" required />
          </div>
            )}
            <div className="login-field">
              <input type="password" placeholder="Password" required />
            </div>
            {!isLogin && (
              <div className="login-field">
                <input type="password" placeholder="Confirm password" required />
              </div>
            )}
            <div className="login-field my-login-btn">
              <div className="login-btn-layer"></div>
              <input type="submit" value={isLogin ? 'Signup' : 'Signup'} />
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Signup;

