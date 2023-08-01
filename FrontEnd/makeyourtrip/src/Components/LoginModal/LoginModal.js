// LoginModal.js
import React from 'react';
import {Modal } from 'antd';
import Login from '../Login/Login';

const LoginModal = ({ onClose }) => {
  return (
    <Modal title=" " footer={null} open={true} onOk={onClose} onCancel={onClose}>
        <Login/>
    </Modal>
  );
};

export default LoginModal;
