import { useState } from "react";

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
                    <img src="/assets/person.png" alt="Name Icon" />
                    <input type="text" style={{ margin: '0 10px' }}placeholder="First Name"/>
                </div>
                <div className="input">
                    <img src="/assets/person.png" alt="Name Icon" />
                    <input type="text" style={{ margin: '0 10px' }}placeholder="Last Name"/>
                </div>
                <div className="input">
                    <img src="/assets/email2.png" alt="Email Icon" />
                    <input type="email" style={{ margin: '0 10px' }}placeholder="Email"/>
                </div>
                <div className="input">
                    <img src="/assets/password.png" alt="Password Icon" />
                    <input type="password" style={{ margin: '0 15px' }}placeholder="Password"/>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Register</div>
            </div>
        </div>
     );
}
 
export default Register;
