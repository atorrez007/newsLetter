import React from "react";
import "./SuccessMessageStyles.css";
import iconSuccess from "../assets/images/icon-success.svg";

interface Props {
  emailAddress: string;
  handleComponentChild: () => void;
}

const SuccessMessage = ({ emailAddress, handleComponentChild }: Props) => {
  return (
    <div className="success-container">
      <div className="success-panel">
        <div className="logo-container">
          <img src={iconSuccess} alt="success-logo"></img>
        </div>
        <div className="header-content">
          <h1>Thanks for subscribing!</h1>
        </div>
        <div className="description-content">
          <p>
            A confirmation has been sent to <strong>{emailAddress}. </strong>
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <div className="success-interactive-content">
          <button
            className="success-button-styles"
            onClick={() => {
              handleComponentChild();
            }}
          >
            Dismiss Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
