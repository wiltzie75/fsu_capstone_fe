import { useState } from "react";
import { SlLock } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { GoPerson } from "react-icons/go";


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
        <div className="register-container">
            <div className="register-header">
            <div className="register-text">Register</div>
            <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={<GoPerson />} alt="Name Icon" />
                    <input type="text" placeholder="First Name"/>
                </div>
                <div className="input">
                    <img src={<GoPerson />} alt="Name Icon" />
                    <input type="text" placeholder="Last Name"/>
                </div>
                <div className="input">
                    <img src={<MdOutlineMail />} alt="Email Icon" />
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <img src={<SlLock />} alt="Password Icon" />
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Register</div>
            </div>
        </div>
     );
}
 
export default Register;
