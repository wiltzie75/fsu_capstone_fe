import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../api";

const Login = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleClick(e) {
    e.preventDefault();
    const token = await userLogin({
      email: inputEmail,
      password: inputPassword
    });
    localStorage.setItem("token", token);
    console.log("token from login", localStorage.getItem("token"));
    navigate("/user/:id");
  }

  return (
    // <form id="login-form" onSubmit={handleClick}>
    //   <input
    //     type="text"
    //     value={inputEmail}
    //     placeholder="email"
    //     onChange={(event) => setInputEmail(event.target.value)}
    //   />
    //   <input
    //     type="password"
    //     value={inputPassword}
    //     placeholder="password"
    //     onChange={(event) => setInputPassword(event.target.value)}
    //     pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
    //     title="Must contain at least one uppercase and lowercase letter, and at least 6 or more characters"
    //   />
    //   <button type="submit">Log In</button>
    // </form>
    <div className="login-container">
      <div className="login-header">
        <div className="login-text">Login</div>
        <div className="underline"></div>
      </div>
      <form className="inputs">
        <div className="input">
          <img src="/assets/email2.png" alt="Email Icon" />
          <input
            type="email"
            value={inputEmail}
            style={{ margin: "0 10px" }}
            placeholder="Email"
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src="/assets/password.png" alt="Password Icon" />
          <input
            type="password"
            value={inputPassword}
            style={{ margin: "0 15px" }}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </div>
        <div className="submit-container">
          <button className="submit" onClick={handleClick}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
