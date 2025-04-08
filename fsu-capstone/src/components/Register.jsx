import { useState } from "react";
import { SlLock } from "react-icons/sl";

const Register = ({ setToken }) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch("", {
                method: "POST",
                body: JSON.stringify({firstname, lastname, email, password}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const result = await response.json()
            setToken(result.token)
            
            setFirstname("")
            setLastname("")
            setEmail("")
            setPassword("")

        } catch (error) {
            console(error)
        }
    }

    return ( 
        <div className="container">
            <div className="signup-header">
            <div className="text">Register</div>
            <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src="" alt="" />
                    <input type="text" />
                </div>
                <div className="input">
                    <img src="" alt="" />
                    <input type="text" />
                </div>
                <div className="input">
                    <img src="" alt="" />
                    <input type="email" />
                </div>
                <div className="input">
                    <img src={<SlLock />} alt="Password Icon" />
                    <input type="password" />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Register</div>
            </div>
        </div>
     );
}
 
export default Register;
