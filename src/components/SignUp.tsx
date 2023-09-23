import successIcon from "../assets/images/icon-success.svg";
import desktopImage from "../assets/images/illustration-sign-up-desktop.svg";
import "./SignUpStyles.css";
const SignUp = () => {
  return (
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
          </p>
          <div className="input-container">
            <input
              className="input-styles"
              placeholder="email@company.com"
            ></input>
          </div>
          <div className="button-container">
            <button className="button-styles">
              <strong>Subscribe to monthly newsletter</strong>
            </button>
          </div>
        </div>
      </div>
      <div className="right-sided-content">
        <div className="img-container">
          <img src={desktopImage} alt="desktop-artwork" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
