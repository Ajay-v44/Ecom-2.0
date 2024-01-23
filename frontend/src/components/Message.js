import React from 'react';
import Toast from 'react-bootstrap/Toast';

const Message = ({ message }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 9999,
        padding: '10px',
      }}
    >
      <Toast>
        <Toast.Header closeButton={false}>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">ECOM</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </div>
  );
};

export default Message;
