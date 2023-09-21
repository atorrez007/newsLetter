import successIcon from "../assets/images/icon-success.svg";
import "./SignUpStyles.css";
const SignUp = () => {
  return (
    <div className="signup-box">
      <div className="left-sided-content">
        <h1 className="left-sided-header">Stay updated!</h1>
        <div className="left-sided-paragraph">
          <p className="textRegular">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
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
      </div>
      <div className="right-sided-content">
        <h1 className="text"></h1>
      </div>
    </div>
  );
};

export default SignUp;
