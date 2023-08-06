// import "../LandingPage/LandingPage.css";
// import { FaBars } from "react-icons/fa";
// import { useState } from "react";
// import LoginModal from "../LoginModal/LoginModal";
// import SignupModal from "../SignupModal/SignupModal";
// import Login from "../Login/Login";
// import { Popup } from "reactjs-popup";
// import { Modal } from "antd";

// function Navbar({ onClose }) {
//   const [showList, setShowList] = useState(false);

//   const handleNavClick = () => {
//     setShowList(!showList);
//   };
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [toggle, setToggle] = useState(false);

//   const handleLoginButtonClick = () => {
//     // setIsLoginModalOpen(true);
//     setToggle(!toggle);
//   };
//   const handleSignupButtonClick = () => {
//     setIsSignupModalOpen(true);
//   };

//   // const handleOpenModal = () => {
//   //   setIsModalOpen(true);
//   // };

//   // const handleCloseModal = () => {
//   //   setIsModalOpen(false);
//   // };

//   return (
//     <nav className="my-navbar" style={{ position: "fixed" }}>
//       <div className="my-navbar-center">
//         <div className="my-navbar-header">
//           {/* <img src="../images/logo copy 1.jpg" className="my-navbar-logo" alt="navlogo"></img> */}
//           <h3
//             className="my-navbar-logo"
//             style={{ display: "block", fontFamily: "cursive" }}
//           >
//             make
//             <span
//               style={{
//                 background: "#fe5c24",
//                 color: "#ffff",
//                 borderRadius: "4px",
//               }}
//             >
//               <i>your</i>
//             </span>
//             trip<span style={{ color: "#2493e0" }}>.</span>
//           </h3>
//           <button
//             type="button"
//             className="my-navbar-toggle"
//             id="my-navbar-toggle"
//             onClick={handleNavClick}
//           >
//             <FaBars></FaBars>
//           </button>
//         </div>
//         {/* Conditionally apply "show-list" class based on the state */}
//         <ul
//           className={`my-navbar-list ${showList ? "show-list" : ""}`}
//           id="my-navbar-list"
//           style={{ marginBottom: "0rem" }}
//         >
//           <li>
//             <a
//               style={{ textDecoration: "none" }}
//               href="#header"
//               className="my-navbar-links scroll-link"
//             >
//               home
//             </a>
//           </li>
//           <li>
//             <a href="#about" className="my-navbar-links scroll-link">
//               about
//             </a>
//           </li>
//           <li>
//             <a href="#services" className="my-navbar-links scroll-link">
//               services
//             </a>
//           </li>
//           <li>
//             <a href="#featured" className="my-navbar-links scroll-link">
//               featured
//             </a>
//           </li>
//           <li>
//             <a href="#gallery" className="my-navbar-links scroll-link">
//               gallery
//             </a>
//           </li>
//         </ul>
//         {/* ... */}
//         <div class="my-navbar-social-icons">
//           <span>
//             <a href="#" class="my-navbar-links-icon" style={{marginRight:"1rem"}} onClick={handleLoginButtonClick}>LogIn</a>
//             {/* {/* <Popup trigger={<a href="#" class="my-navbar-links-icon" style={{marginRight:"1rem"}}>LogIn</a>} modal nested>
//             {
//               close=>(
//                 <div>

//                   <Login closeLogin={handleLoginButtonClick}/>
//                   <div>
//                     {
//                       toggle && close()
//                     }
//                   </div>
//                 </div>
//               )
//             }
//           </Popup> */}
//             {/* <Modal
//               title=" "
//               width={550}
//               footer={null}
//               open={toggle}
//               onOk={onClose}
//               onCancel={onClose}
//             >
//               <Login onClose={handleLoginButtonClick}/>
//               {/* {
//                 toggle && close()
//               } */}
//             {/* </Modal>  */}
//             {/* {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />} */}
//             {/* <LoginModal open={isModalOpen} onCancel={handleCloseModal} /> */}
//           </span>
//           <span>
//             <a
//               href="#"
//               class="my-navbar-links-icon"
//               onClick={handleSignupButtonClick}
//             >
//               SignUp
//             </a>
//             {isSignupModalOpen && (
//               <SignupModal onClose={() => setIsSignupModalOpen(false)} />
//             )}
//           </span>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import "../LandingPage/LandingPage.css";
import { FaBars } from "react-icons/fa";
import LoginModal from "../LoginModal/LoginModal";
import SignupModal from "../SignupModal/SignupModal";
import { Modal, Space } from "antd";
import Dropdown from "antd/es/dropdown/dropdown";
import { DownOutlined } from "@ant-design/icons";

function Navbar({ onClose }) {
  const [showList, setShowList] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // Check local storage for user ID or any other condition to determine login status
    const userId = localStorage.getItem("userId"); // Replace with your condition
    setIsLoggedIn(!!userId); // Update login status based on condition
  }, []);

  const handleNavClick = () => {
    setShowList(!showList);
  };

  const items = [
    {
      label: "Profile",
      key: "1",
      path: "/first", // Add path property for the link
    },
    {
      label: "Notifications",
      key: "2",
      path: "/second", // Add path property for the link
    },
    {
      label: "Logout",
      key: "3",
      path: "/third", // Add path property for the link
    },
  ];

  const handleLoginButtonClick = () => {
    setToggle(!toggle);
  };

  const handleSignupButtonClick = () => {
    setIsSignupModalOpen(true);
  };

  return (
    <nav className="my-navbar" style={{ position: "fixed" }}>
      <div className="my-navbar-center">
        <div className="my-navbar-header">
          <h3
            className="my-navbar-logo"
            style={{ display: "block", fontFamily: "cursive" }}
          >
            make
            <span
              style={{
                background: "#fe5c24",
                color: "#ffff",
                borderRadius: "4px",
              }}
            >
              <i>your</i>
            </span>
            trip<span style={{ color: "#2493e0" }}>.</span>
          </h3>
          <button
            type="button"
            className="my-navbar-toggle"
            id="my-navbar-toggle"
            onClick={handleNavClick}
          >
            <FaBars />
          </button>
        </div>
        <ul
          className={`my-navbar-list ${showList ? "show-list" : ""}`}
          id="my-navbar-list"
          style={{ marginBottom: "0rem" }}
        >
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="#header"
              className="my-navbar-links scroll-link"
            >
              home
            </a>
          </li>
          <li>
            <a href="#about" className="my-navbar-links scroll-link">
              about
            </a>
          </li>
          <li>
            <a href="#services" className="my-navbar-links scroll-link">
              services
            </a>
          </li>
          <li>
            <a href="#featured" className="my-navbar-links scroll-link">
              featured
            </a>
          </li>
          <li>
            <a href="#gallery" className="my-navbar-links scroll-link">
              gallery
            </a>
          </li>
          <div class="my-navbar-social-icons">
            <span>
              {isLoggedIn ? (
                <div
                  className="my-profile-dropdown"
                  style={{ display: "flex",justifyContent:"center",alignItems:"center" }}
                >
                  {/* Customize your profile dropdown content here
                <a href="/profile">Profile</a>
                <a href="/logout">Logout</a> */}
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <a style={{textAlign:"left"}} onClick={(e) => e.preventDefault()}>
                      <Space  style={{marginLeft:"8rem",textAlign:"left"}}>
                        Hi , User
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              ) : (
                // <div>
                  <a
                    href="#"
                    class="my-navbar-links-icon"
                    style={{ marginRight: "1rem" }}
                    onClick={handleLoginButtonClick}
                  >
                    LogIn
                  </a>
                // </div>
              )}
            </span>
            <span>
              {!isLoggedIn && (
                // <div>
                  <a
                    href="#"
                    class="my-navbar-links-icon "
                    onClick={handleSignupButtonClick}
                  >
                    SignUp
                  </a>
                // </div>
              )}
            </span>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
