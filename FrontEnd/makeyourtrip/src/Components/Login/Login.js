import { useState } from "react";
import "./Login.css";
import SignupModal from "../SignupModal/SignupModal";
import ForgotPasswordModal from "../ForgotPasswordModal/ForgotPasswordModal";
import { Popup } from "reactjs-popup";
import { Modal } from "antd";
import Signup from "../Signup/Signup";

const Login = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setisForgotPasswordModalOpen] =
    useState(false);

  const handleSignupButtonClick = () => {
    // setIsSignupModalOpen(true);
    // props.closeLogin(true);
  };

  const handleForgotPasswordButtonClick = () => {
    setisForgotPasswordModalOpen(true);
    
  };
  const closeSignup = () => {
    setIsSignupModalOpen(true);
  };

  return (
    <div className="login-wrapper">
      {/* <div> */}
      <div className="login-title-text">
        <div
          className={`login-title ${
            isLogin ? "login-form-title" : "signup-form-title"
          }`}
        >
          {isLogin ? "Login Form" : "Login Form"}
        </div>
      </div>
      <div className="login-form-container">
        {/* <div className="login-slide-controls"> */}
        <div>
          <h2 style={{ textAlign: "center", marginTop: "0.7rem" }}>
            Welcome Back!
          </h2>
        </div>
        <div
          className={`login-form-inner ${
            isLogin ? "login-form" : "signup-form"
          }`}
        >
          <form
            action="#"
            className={`login-form ${isLogin ? "login" : "signup"}`}
          >
            {isLogin && (
              <div className="login-field">
                <input type="text" placeholder="Email Address" required />
              </div>
            )}
            {!isLogin && (
              <div className="login-field">
                <input type="password" placeholder="PhoneNumber" required />
              </div>
            )}
            <div className="login-field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="login-field my-login-btn">
              <div className="login-btn-layer"></div>
              <input type="submit" value={isLogin ? "Login" : "Signup"} />
            </div>
            <div
              className="login-footer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                height: "3rem",
              }}
            >
              {isLogin && (
                <div className="login-pass-link">
                  <a href="#" onClick={handleForgotPasswordButtonClick}>
                    Forgot password?
                  </a>
                  {/* {isForgotPasswordModalOpen && <ForgotPasswordModal onClose={() => setisForgotPasswordModalOpen(false)} />}        */}
                </div>
              )}
              {isLogin && (
                <div className="login-signup-link">
                  Not a member? <span className='signup-link' onClick={handleSignupButtonClick}>Signup now</span>
                  {/* <Popup trigger={<span className='signup-link' onClick={handleSignupButtonClick}>Signup now</span>} modal nested>
                  {
                    close=>(
                      <div>
                        <SignupModal onClose={closeSignup}/>
                        {
                          isSignupModalOpen && close()
                        }
                      </div>
                    )
                  }
                </Popup> */}
                  {/* <Modal
                    title=" "
                    width={550}
                    footer={null}
                    open={isSignupModalOpen}
                    onOk={onClose}
                    onCancel={onClose}
                  >
                    <Signup onClose={closeSignup} />
                  </Modal> */}
                  {/* {isSignupModalOpen && <SignupModal onClose={() => setIsSignupModalOpen(false)} />}        */}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Login;

// import { useState } from 'react';
// import './Login.css';
// import SignupModal from '../SignupModal/SignupModal';
// import ForgotPasswordModal from '../ForgotPasswordModal/ForgotPasswordModal';
// import Signup from '../Signup/Signup';

//   const Login = ({navigate,onCancel}) => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [visible, setVisible] = useState(true);

//     const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
//     const [isForgotPasswordModalOpen, setisForgotPasswordModalOpen] = useState(false);

//     const handleSignupButtonClick
//     = () => {
//       // setIsSignupModalOpen(true);
//       onCancel()
//       navigate('Login')
//     };

//     const handleForgotPasswordButtonClick
//     = () => {
//       // setisForgotPasswordModalOpen(true);
//       navigate('Signup',true)
//     };

//   return (
//     <div className="login-wrapper">
//   {/* <div> */}
// <div className="login-title-text">
//         <div className={`login-title ${isLogin ? 'login-form-title' : 'signup-form-title'}`}>
//           {isLogin ? 'Login Form' : 'Login Form'}
//         </div>
//       </div>
//       <div className="login-form-container">
//         {/* <div className="login-slide-controls"> */}
//         <div>
//           <h2 style={{textAlign:"center",marginTop:"0.7rem"}}>Welcome Back!</h2>
//         </div>
//         <div className={`login-form-inner ${isLogin ? 'login-form' : 'signup-form'}`}>
//           <form action="#" className={`login-form ${isLogin ? 'login' : 'signup'}`}>
//           {isLogin && (
//             <div className="login-field">
//             <input type="text" placeholder="Email Address" required />
//           </div>
//             )}
//             {!isLogin && (
//             <div className="login-field">
//             <input type="password" placeholder="PhoneNumber" required />
//           </div>
//             )}
//             <div className="login-field">
//               <input type="password" placeholder="Password" required />
//             </div>
//             <div className="login-field my-login-btn">
//               <div className="login-btn-layer"></div>
//               <input type="submit" value={isLogin ? 'Login' : 'Signup'} />
//             </div>
//             <div className='login-footer' style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",height:"3rem"}}>
// {isLogin && (
//   <div className="login-pass-link">
//     <a href="#" onClick={handleForgotPasswordButtonClick}>Forgot password?</a>
//   </div>
// )}
// {isLogin && (
//   <div className="login-signup-link">
//     Not a member? <span className='signup-link' onClick={handleSignupButtonClick}>Signup now</span>
//   </div>
// )}

//           </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default Login;
