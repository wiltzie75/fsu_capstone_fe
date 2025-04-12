import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../api";

const Login = () => {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleClick(e) {
    e.preventDefault();
    if(!inputEmail || !inputPassword ) {
      setError("Both fields are required")
    } 
    try {
      const result = await userLogin({
        email: inputEmail,
        password: inputPassword
      });
      if(result.error) return setError(result.error)

      if(!result.error) {
        setError(null)
      }
      console.log("result from frontend =>", result)
      localStorage.setItem("token", result.token);
      console.log("result from login", localStorage.getItem("token"));
      navigate("/")
      window.location.reload()
    } catch (error) {
      setError(error)
    }
  }

  return (
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
        <div className="errorMessage">{error}</div>
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
