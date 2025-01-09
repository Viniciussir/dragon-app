import React from "react";
import "./ConfirmationDialog.css";

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="confirmation-dialog">
      <div className="confirmation-dialog__content">
        <button className="confirmation-dialog__close" onClick={onCancel}>
          &times;
        </button>
        <p>{message}</p>
        <button
          className="confirmation-dialog__button confirmation-dialog__button--confirm"
          onClick={onConfirm}
        >
          Sim
        </button>
        <button
          className="confirmation-dialog__button confirmation-dialog__button--cancel"
          onClick={onCancel}
        >
          Não
        </button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
