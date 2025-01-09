import React, { useEffect } from "react";
import "./Alert.css";

const Alert = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`alert alert--${type}`}>
      <span className="alert__message">{message}</span>
      <button className="alert__close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Alert;
