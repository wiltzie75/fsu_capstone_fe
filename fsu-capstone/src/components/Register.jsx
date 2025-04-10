import { useEffect, useState } from "react";
import { createAccount } from "../api";


const Register = ({ setToken }) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    // value testing
    useEffect(() => {
        console.log({firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password
        })
    },[firstname])


    async function submitHandle(e) {
        e.preventDefault()
        console.log("submitted")
        const data = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password
        }
        createAccount(data)
    }

    return ( 
        <div className="register-container">
            <div className="register-header">
            <div className="register-text">Register</div>
            <div className="underline"></div>
            </div>
            <form className="inputs">
                <div className="input">
                    <img src="/assets/person.png" alt="Name Icon" />
                    <input type="text" style={{ margin: '0 10px' }}placeholder="First Name" onChange={ (e)=> setFirstname(e.target.value)}/>
                </div>
                <div className="input">
                    <img src="/assets/person.png" alt="Name Icon" />
                    <input type="text" style={{ margin: '0 10px' }}placeholder="Last Name" onChange={ (e)=> setLastname(e.target.value)}/>
                </div>
                <div className="input">
                    <img src="/assets/email2.png" alt="Email Icon" />
                    <input type="email" style={{ margin: '0 10px' }}placeholder="Email" onChange={ (e)=> setEmail(e.target.value)}/>
                </div>
                <div className="input">
                    <img src="/assets/password.png" alt="Password Icon" />
                    <input type="password" style={{ margin: '0 15px' }}placeholder="Password" onChange={ (e)=> setPassword(e.target.value)}/>
                </div>
            <div className="submit-container">
                <button className="submit" onClick={submitHandle}>Register</button>
            </div>
            </form>
        </div>
     );
}
 
export default Register;
