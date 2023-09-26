import successIcon from "../assets/images/icon-success.svg";
import desktopImage from "../assets/images/illustration-sign-up-desktop.svg";
import mobileImage from "../assets/images/illustration-sign-up-mobile.svg";
import "./SignUpStyles.css";
import { ChangeEvent, FormEvent, useState } from "react";
import SuccessMessage from "./SuccessMessage";

interface User {
  emailAddress: string;
}

const SignUp = () => {
  const [address, setAddress] = useState<User | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsValidEmail(true);
    setAddress({ emailAddress: event.target.value });
  };

  const handleComponentChange = () => {
    setIsEmailSent(false);
    setIsValidEmail(true);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsValidEmail(false);
    address?.emailAddress.includes("@")
      ? setIsEmailSent(true)
      : setIsValidEmail(false);
  };

  const updateImg = () => {
    const width = window.innerWidth;
    width <= 750 ? setIsMobile(true) : setIsMobile(false);
  };

  window.addEventListener("resize", updateImg);

  return (
    <div>
      {!isEmailSent ? (
        <div className="signup-box">
          <div className="left-sided-content">
            <div className="left-sided-header">
              <h1>Stay updated!</h1>
            </div>
            <div className="left-sided-paragraph">
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
            </div>
            <div className="bullet-section">
              <div className="bullet-points">
                <img
                  src={successIcon}
                  alt="success icon"
                  className="icon-style"
                ></img>
                <p>Product discovery and building what matters</p>
              </div>
              <div className="bullet-points">
                <img
                  src={successIcon}
                  alt="success icon"
                  className="icon-style"
                ></img>
                <p>Measuring to ensure updates are a success</p>
              </div>
              <div className="bullet-points">
                <img
                  src={successIcon}
                  alt="success icon"
                  className="icon-style"
                ></img>
                <p>And much more!</p>
              </div>
            </div>
            <div className="interactive-content">
              <p>
                <strong>Email address</strong>
                {!isValidEmail ? <span>Valid email required</span> : null}
              </p>
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  {isValidEmail ? (
                    <input
                      className="input-styles"
                      placeholder="email@company.com"
                      onChange={handleChange}
                    ></input>
                  ) : (
                    <input
                      className="input-styles-error"
                      placeholder="email@company.com"
                      onChange={handleChange}
                    ></input>
                  )}
                </div>
                <div className="signup-button-container">
                  <button
                    className="signup-button-styles"
                    onClick={handleSubmit}
                  >
                    <strong>Subscribe to monthly newsletter</strong>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="right-sided-content">
            <div className="img-container">
              {isMobile ? (
                <img src={mobileImage} alt="desktop-artwork" />
              ) : (
                <img src={desktopImage} alt="desktop-artwork" />
              )}
            </div>
          </div>
        </div>
      ) : (
        <SuccessMessage
          emailAddress={
            address ? address.emailAddress : "unknown email address"
          }
          handleComponentChild={handleComponentChange}
        />
      )}
    </div>
  );
};

export default SignUp;
