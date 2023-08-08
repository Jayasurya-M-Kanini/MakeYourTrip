// import '../Login/Login.css';
// import { useState } from 'react';

//   const Signup = () => {
//     const [isLogin, setIsLogin] = useState(true);
  
//     const handleSlideChange = () => {
//       setIsLogin(!isLogin);
//     };

//   return (
//     <div className="login-wrapper">
//   {/* <div> */}
// <div className="login-title-text">
//         <div className={`login-title ${isLogin ? 'login-form-title' : 'signup-form-title'}`}>
//           {isLogin ? 'Register' : 'Register'}
//         </div>
//       </div>
//       <div className="login-form-container">
//         <div className="login-slide-controls">
//           <input
//             type="radio"
//             name="login-slide"
//             id="login"
//             checked={isLogin}
//             onChange={handleSlideChange}
//           />
//           <input
//             type="radio"
//             name="login-slide"
//             id="signup"
//             checked={!isLogin}
//             onChange={handleSlideChange}
//           />
//           <label htmlFor="login" className={`login-slide ${isLogin ? 'login' : 'signup'}`}>
//             Traveller
//           </label>
//           <label htmlFor="signup" className={`login-slide ${isLogin ? 'signup' : 'login'}`}>
//             Agent
//           </label>
//           <div className={`login-slider-tab ${isLogin ? 'login' : 'signup'}`}></div>
//         </div>
//         <div className={`login-form-inner ${isLogin ? 'login-form' : 'signup-form'}`}>
//           <form action="#" className={`login-form ${isLogin ? 'login' : 'signup'}`}>
//           {!isLogin && (
//           <div className="login-field">
//           <input type="text" placeholder="Agency Name" required />
//           </div>
//             )}
//           {!isLogin && (
//           <div className="login-field">
//           <input type="text" placeholder="Contact Person Name" required />
//           </div>
//             )}
//            {!isLogin && (
//             <div className="login-field">
//             <input type="tel" placeholder="PhoneNumber" required />
//           </div>
//             )}
//             {!isLogin && (
//              <div className="login-field">
//              <input type="email" placeholder="Email Address" required />
//    </div>
//             )}
//             {!isLogin && (
//             <div className="login-field">
//               <input type="text" placeholder="Street" required />
//           </div>
//             )}
//             {!isLogin && (
//               <div className="login-field">
//                 <input type="text" placeholder="City" required />
//               </div>
//             )}
//             {!isLogin && (
//               <div className="login-field">
//                 <input type="text" placeholder="State" required />
//               </div>
//             )}
//             {!isLogin && (
//               <div className="login-field">
//                 <input type="text" placeholder="Country" required />
//               </div>
//             )}
//             {!isLogin && (
//               <div className="login-field">
//                 <input type="password" placeholder="Password" required />
//               </div>
//             )}
//              {isLogin && (
//               <div className="login-field">
//                 <input type="text" placeholder="User Name" required />
//               </div>
//             )}
//             {isLogin && (
//               <div className="login-field">
//                 <input type="tel" placeholder="Phone Number" required />
//               </div>
//             )}
//                          {isLogin && (
//               <div className="login-field">
//                 <input type="email" placeholder="Email" required />
//               </div>
//             )}
//                          {isLogin && (
//               <div className="login-field">
//                 <input type="password" placeholder="Password" required />
//               </div>
//             )}
//             <div className="login-field my-login-btn">
//               <div className="login-btn-layer"></div>
//               <input type="submit" value={isLogin ? 'Signup' : 'Signup'} />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default Signup;



import { toast } from "react-toastify";
import "../Login/Login.css";
import { useState } from "react";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSlideChange = () => {
    setIsLogin(!isLogin);
  };
  var [agent, setAgent] = useState({
    user: {},
    agencyName: "",
    contactPersonName: "",
    phoneNumber: "",
    emailId: "",
    street: "",
    city: "",
    state: "",
    country: "",
    status: "",
    passwordClear: "",
  });
  var AgentRegister = () => {
    fetch("", {
      //Localhost :Your ID
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...agent }),
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        toast.success("Agent Registered Successful");
      })
      .catch((err) => {
        toast.error("Check Credentials");
        console.log(err.error);
      });
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
          {isLogin ? "Register" : "Register"}
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
          <label
            htmlFor="login"
            className={`login-slide ${isLogin ? "login" : "signup"}`}
          >
            Traveller
          </label>
          <label
            htmlFor="signup"
            className={`login-slide ${isLogin ? "signup" : "login"}`}
          >
            Agent
          </label>
          <div
            className={`login-slider-tab ${isLogin ? "login" : "signup"}`}
          ></div>
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
            {!isLogin && (
              <div className="login-field">
                <input
                  type="text"
                  placeholder="Agency Name"
                  required
                  onChange={(event) => {
                    setAgent({
                      ...agent,
                      agencyName: event.target.value,
                    });
                  }}
                />
              </div>
            )}
            {!isLogin && (
              <div className="login-field">
                <input
                  type="text"
                  placeholder="Contact Person Name"
                  required
                  onChange={(event) => {
                    setAgent({
                      ...agent,
                      contactPersonName: event.target.value,
                    });
                  }}
                />
              </div>
            )}
            {!isLogin && (
              <div className="login-field">
                <input
                  type="tel"
                  placeholder="PhoneNumber"
                  required
                  onChange={(event) => {
                    setAgent({
                      ...agent,
                      phoneNumber: event.target.value,
                    });
                  }}
                />
              </div>
            )}
            {!isLogin && (
              <div className="login-field">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  onChange={(event) => {
                    setAgent({
                      ...agent,
                      emailId: event.target.value,
                    });
                  }}
                />
              </div>
            )}
            {!isLogin && (
              <div className="login-field">
                <input
                  type="text"
                  placeholder="Street"
                  required
                  onChange={(event) => {
                    setAgent({
                      ...agent,
                      street: event.target.value,
                    });
                  }}
                />
              </div>
            )}
            {!isLogin && (
              <div className="login-field">
                <input
                  type="text"
                  placeholder="City"
                  required
                  onChange={(event) => {
                    setAgent({
                      ...agent,
                      city: event.target.value,
                    });
                  }}
                />
              </div>
            )}
            {!isLogin && (
              <div className="login-field">
                <input
                  type="text"
                  placeholder="State"
                  required
                  onChange={(event) => {
                    setAgent({
                      ...agent,
                      state: event.target.value,
                    });
                  }}
                />
              </div>
            )}
            {!isLogin && (
              <div className="login-field">
                <input
                  type="text"
                  placeholder="Country"
                  required
                  onChange={(event) => {
                    setAgent({
                      ...agent,
                      country: event.target.value,
                    });
                  }}
                />
              </div>
            )}
            {!isLogin && (
              <div className="login-field">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(event) => {
                    setAgent({
                      ...agent,
                      passwordClear: event.target.value,
                    });
                  }}
                />
              </div>
            )}
            {isLogin && (
              <div className="login-field">
                <input type="text" placeholder="User Name" required />
              </div>
            )}
            {isLogin && (
              <div className="login-field">
                <input type="tel" placeholder="Phone Number" required />
              </div>
            )}
            {isLogin && (
              <div className="login-field">
                <input type="email" placeholder="Email" required />
              </div>
            )}
            {isLogin && (
              <div className="login-field">
                <input type="password" placeholder="Password" required />
              </div>
            )}
            <div className="login-field my-login-btn">
              <div className="login-btn-layer"></div>
              <input
                type="submit"
                onClick={AgentRegister}
                value={isLogin ? "Signup" : "Signup"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Signup;
