// LoginModal.js
import React from 'react';
import {Modal } from 'antd';
import Signup from '../Signup/Signup';

const SignupModal = ({ onClose }) => {
  return (
    <Modal title=" " footer={null} open={true} onOk={onClose} onCancel={onClose}>
        <Signup/>
    </Modal>
  );
};

export default SignupModal;
