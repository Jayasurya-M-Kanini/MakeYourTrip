// import React, { Component } from 'react'
// function Login() {
//     return (
//       <form>
//         <h3>Sign In</h3>
//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>
//         <div className="mb-3">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>
//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Forgot <a href="#">password?</a>
//         </p>
//       </form>
//     )
// }

// export default Login;

import React, { useState } from 'react';



// function Login() {

//   const [justifyActive, setJustifyActive] = useState('tab1');;

//   const handleJustifyClick = (value) => {
//     if (value === justifyActive) {
//       return;
//     }

//     setJustifyActive(value);
//   };

//   return (
//     // <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

//     //   <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
//     //     <MDBTabsItem>
//     //       <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
//     //         Login
//     //       </MDBTabsLink>
//     //     </MDBTabsItem>
//     //     <MDBTabsItem>
//     //       <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
//     //         Register
//     //       </MDBTabsLink>
//     //     </MDBTabsItem>
//     //   </MDBTabs>

//     //   <MDBTabsContent>

//     //     <MDBTabsPane show={justifyActive === 'tab1'}>

//     //       <div className="text-center mb-3">
//     //         <p>Sign in with:</p>

//     //         <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
//     //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//     //             <MDBIcon fab icon='facebook-f' size="sm"/>
//     //           </MDBBtn>

//     //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//     //             <MDBIcon fab icon='twitter' size="sm"/>
//     //           </MDBBtn>

//     //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//     //             <MDBIcon fab icon='google' size="sm"/>
//     //           </MDBBtn>

//     //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//     //             <MDBIcon fab icon='github' size="sm"/>
//     //           </MDBBtn>
//     //         </div>

//     //         <p className="text-center mt-3">or:</p>
//     //       </div>

//     //       <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
//     //       <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

//     //       <div className="d-flex justify-content-between mx-4 mb-4">
//     //         <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//     //         <a href="!#">Forgot password?</a>
//     //       </div>

//     //       <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
//     //       <p className="text-center">Not a member? <a href="#!">Register</a></p>

//     //     </MDBTabsPane>

//     //     <MDBTabsPane show={justifyActive === 'tab2'}>

//     //       <div className="text-center mb-3">
//     //         <p>Sign un with:</p>

//     //         <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
//     //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//     //             <MDBIcon fab icon='facebook-f' size="sm"/>
//     //           </MDBBtn>

//     //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//     //             <MDBIcon fab icon='twitter' size="sm"/>
//     //           </MDBBtn>

//     //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//     //             <MDBIcon fab icon='google' size="sm"/>
//     //           </MDBBtn>

//     //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//     //             <MDBIcon fab icon='github' size="sm"/>
//     //           </MDBBtn>
//     //         </div>

//     //         <p className="text-center mt-3">or:</p>
//     //       </div>

//     //       <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
//     //       <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
//     //       <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
//     //       <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

//     //       <div className='d-flex justify-content-center mb-4'>
//     //         <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
//     //       </div>

//     //       <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

//     //     </MDBTabsPane>

//     //   </MDBTabsContent>

//     // </MDBContainer>
//   //   <section class="ftco-section">
// 	// 	<div class="container">
// 	// 		<div class="row justify-content-center">
// 	// 			<div class="col-md-6 text-center mb-5">
// 	// 				<h2 class="heading-section">Login #05</h2>
// 	// 			</div>
// 	// 		</div>
// 	// 		<div class="row justify-content-center">
// 	// 			<div class="col-md-7 col-lg-5">
// 	// 				<div class="wrap">
// 	// 					<div class="img" style={{backgroundImage:"url(images/bg-1.jpg)"}}></div>
// 	// 					<div class="login-wrap p-4 p-md-5">
// 	// 		      	<div class="d-flex">
// 	// 		      		<div class="w-100">
// 	// 		      			<h3 class="mb-4">Sign In</h3>
// 	// 		      		</div>
// 	// 							<div class="w-100">
// 	// 								<p class="social-media d-flex justify-content-end">
// 	// 									<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a>
// 	// 									<a href="#" class="social-icon d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a>
// 	// 								</p>
// 	// 							</div>
// 	// 		      	</div>
// 	// 						<form action="#" class="signin-form">
// 	// 		      		<div class="form-group mt-3">
// 	// 		      			<input type="text" id='username' class="form-control" required/>
// 	// 		      			<label class="form-control-placeholder" for="username">Username</label>
// 	// 		      		</div>
// 	// 	            <div class="form-group">
// 	// 	              <input id="password-field" type="password" class="form-control" required/>
// 	// 	              <label class="form-control-placeholder" for="password">Password</label>
// 	// 	              <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
// 	// 	            </div>
// 	// 	            <div class="form-group">
// 	// 	            	<button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
// 	// 	            </div>
// 	// 	            <div class="form-group d-md-flex">
// 	// 	            	<div class="w-50 text-left">
// 	// 		            	<label class="checkbox-wrap checkbox-primary mb-0">Remember Me
// 	// 								  <input type="checkbox" checked/>
// 	// 								  <span class="checkmark"></span>
// 	// 									</label>
// 	// 								</div>
// 	// 								<div class="w-50 text-md-right">
// 	// 									<a href="#">Forgot Password</a>
// 	// 								</div>
// 	// 	            </div>
// 	// 	          </form>
// 	// 	          <p class="text-center">Not a member? <a data-toggle="tab" href="#signup">Sign Up</a></p>
// 	// 	        </div>
// 	// 	      </div>
// 	// 			</div>
// 	// 		</div>
// 	// 	</div>
// 	// </section>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
import './Login.css';
import SignupModal from '../SignupModal/SignupModal';


  const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

    const handleSignupButtonClick
    = () => {
      setIsSignupModalOpen(true);
    };

  return (
    <div className="login-wrapper">
  {/* <div> */}
<div className="login-title-text">
        <div className={`login-title ${isLogin ? 'login-form-title' : 'signup-form-title'}`}>
          {isLogin ? 'Login Form' : 'Login Form'}
        </div>
      </div>
      <div className="login-form-container">
        {/* <div className="login-slide-controls"> */}
        <div>  
          <h2 style={{textAlign:"center",marginTop:"0.7rem"}}>Welcome Back!</h2>
                  {/* <input
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
            Email
          </label>
          <label htmlFor="signup" className={`login-slide ${isLogin ? 'signup' : 'login'}`}>
            Phone
          </label>
          <div className={`login-slider-tab ${isLogin ? 'login' : 'signup'}`}></div> */}
        </div>
        <div className={`login-form-inner ${isLogin ? 'login-form' : 'signup-form'}`}>
          <form action="#" className={`login-form ${isLogin ? 'login' : 'signup'}`}>
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
              <input type="submit" value={isLogin ? 'Login' : 'Signup'} />
            </div>
            <div className='login-footer' style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",height:"3rem"}}>
            {isLogin && (
              <div className="login-pass-link">
                <a href="#">Forgot password?</a>
              </div>
            )}
            {isLogin && (
              <div className="login-signup-link">
                Not a member? <span className='signup-link' onClick={handleSignupButtonClick}>Signup now</span>  
                {isSignupModalOpen && <SignupModal onClose={() => setIsSignupModalOpen(false)} />}       
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




