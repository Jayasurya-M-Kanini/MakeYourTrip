import React, { useState, useEffect, useRef } from 'react';
import { Button} from '@mui/material';
import './BookingOTPModal.css'
import SuccessModal from './SuccessModal';
import '../BookingPage/BlurBackground.css'


function BookingOTPModal( {onClose}) {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showBookingOTPModal, setShowBookingOTPModal] = useState(true);
    const [resendDisabled, setResendDisabled] = useState(false);
    const [countdown, setCountdown] = useState(60);

    const handleVerifyClick=()=>{
        setShowSuccessModal(true);
        setShowBookingOTPModal(false);
    }

const [inputs, setInputs] = useState(Array(6).fill(""));

  const inputsRef = useRef([]);

  const [activeButton, setActiveButton] = useState(false);
  useEffect(() => {
    inputsRef.current[0].focus();
    startCountdown();

  }, []);

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedValue = (event.clipboardData || window.clipboardData).getData('text');
    const otpLength = inputsRef.current.length;

    for (let i = 0; i < otpLength; i++) {
      if (i < pastedValue.length) {
        inputsRef.current[i].value = pastedValue[i];
        inputsRef.current[i].removeAttribute('disabled');
        inputsRef.current[i].focus();
      } else {
        inputsRef.current[i].value = ''; // Clear any remaining inputs
        inputsRef.current[i].focus();
      }
    }
  };

  const handleKeyUp = (index, e) => {
    const currentInput = inputsRef.current[index];
    const nextInput = inputsRef.current[index + 1];
    const prevInput = inputsRef.current[index - 1];

    if (currentInput.value.length > 1) {
      currentInput.value = '';
      return;
    }
    if (e.key === 'Backspace') {
        if (prevInput) {
          currentInput.value = ''; // Clear the current input
          prevInput.removeAttribute('disabled');
          prevInput.value = '';
          prevInput.focus();
        }
      }

    if (currentInput.value.length === 1) {
      if (nextInput) {
        nextInput.removeAttribute('disabled');
        nextInput.focus();
      }
    }

    if (nextInput && nextInput.hasAttribute('disabled') && currentInput.value !== '') {
      nextInput.removeAttribute('disabled');
      nextInput.focus();
    }

    setActiveButton(false);

    const inputsNo = inputsRef.current.length;
    if (!inputsRef.current[inputsNo - 1].disabled && inputsRef.current[inputsNo - 1].value !== '') {
      setActiveButton(true);
    }
  };

  const handleResendClick = () => {
    setResendDisabled(true);
    setCountdown(60);
    startCountdown();
  };

  
  const startCountdown = () => {
    setResendDisabled(true); // Disable the "Request again" link immediately
    const interval = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount > 1) {
          return prevCount - 1;
        } else {
          setResendDisabled(false); // Enable the "Request again" link
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);
  };


  return (
    <div>
    <div className="modal-overlay"></div> 

    {showBookingOTPModal && (
        <div className={`blur-background ${showBookingOTPModal ? 'show' : ''}`}>

      <div className="container-fluid  d-block">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4" style={{ minWidth: '500px' }}>
            <div className="card bg-white border-0" style={{ boxShadow: '0 12px 15px rgba(0, 0, 0, 0.7)' }}>
              <div className="card-body text-center" style={{ height: '24rem' }}>
                <h4>Verify</h4>
                <p>Your code was sent to you via SMS</p>

                <div className="otp-field mb-4">
                  {Array.from({ length: 6 }, (_, index) => (
                    <input
                      key={index}
                      type="number"
                      ref={(el) => (inputsRef.current[index] = el)}
                      onPaste={handlePaste}
                      onKeyUp={(e) => handleKeyUp(index, e)}
                      className="otp-input"
                    />
                  ))}
                </div>

                <Button
                  className={`btn btn-primary mb-3 ${activeButton ? 'active' : ''}`}
                  disabled={!activeButton}
                  onClick={handleVerifyClick} // Open the SuccessModal when Verify is clicked
                  style={{ backgroundColor: '#007bff', borderColor: '#007bff' }} // Set background color and border color
                >
                  Verify
                </Button>

<p className="resend text-muted mb-0">
                      {resendDisabled ? (
                        `Resend in 00:${countdown.toString().padStart(2, '0')} seconds`
                      ) : (
                        <div>
                          Didn't receive code?
                          <a href="#" onClick={handleResendClick}>
                            Request again
                          </a>
                        </div>
                      )}
                    </p>

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )}
    {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}
  </div>
  );
}

export default BookingOTPModal;
