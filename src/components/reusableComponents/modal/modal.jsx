import React, { useState, forwardRef, useImperativeHandle } from "react";

import ReactDOM from "react-dom";

import "./modal.css";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(true);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (props.display) {
    return ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div onClick={() => props.close()} className="modal-backdrop" />
        <div className="modal-box">
          <button className="modalCloseBtn" onClick={() => props.close()}>CANCEL</button>
          {props.children}
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }
  return null;
});

export default Modal;
