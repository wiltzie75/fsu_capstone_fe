import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../api";

const Login = ({ token, setToken }) => {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleClick(e){
    e.preventDefault();
    const token = await userLogin({
      email: inputEmail,
      password: inputPassword
    })
    localStorage.setItem("token", token)
  }
  // const logInUser = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch(
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           inputEmail,
  //           inputPassword
  //         }),
  //       }
  //     );

  //     const result = await response.json();

  //     if (response.ok) {
  //       const accessToken = result.token;

  //       if (accessToken) {
  //         setToken(accessToken);
  //         localStorage.setItem("token", accessToken);

  //         const userDetailsResponse = await fetch(
  //           "http://localhost:3000/api/users/:id",
  //           {
  //             headers: {
  //               Authorization: `Bearer ${accessToken}`,
  //             },
  //           }
  //         );
  //         const userDetails = await userDetailsResponse.json();
  //         onLoginSuccess(userDetails);
  //         localStorage.setItem("userDetails", JSON.stringify(userDetails));
  //       } else {
  //         console.error("Access token is missing from the response:", result);
  //       }
  //     } else {
  //       console.error("Login failed:", result.error);
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //   }
  // };

  return (
    <form id="login-form" onSubmit={handleClick}>
      <input
        type="text"
        value={inputEmail}
        placeholder="email"
        onChange={(event) => setInputEmail(event.target.value)}
      />
      <input
        type="password"
        value={inputPassword}
        placeholder="password"
        onChange={(event) => setInputPassword(event.target.value)}
        // pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
        // title="Must contain at least one uppercase and lowercase letter, and at least 6 or more characters"
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
