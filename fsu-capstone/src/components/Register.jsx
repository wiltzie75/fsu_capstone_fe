import { useEffect, useState } from "react";
import { createAccount } from "../api";
import { useNavigate } from "react-router-dom";


const Register = ({ setToken }) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    // value testing
    // useEffect(() => {
    //     console.log({firstname: firstname,
    //                 lastname: lastname,
    //                 email: email,
    //                 password: password
    //     })
    // },[firstname])


    async function submitHandle(e) {
        e.preventDefault()
        console.log("clicked")
        const data = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password
        }
<<<<<<< HEAD
        createAccount(data)
        resetForm();
    }

    function resetForm() {
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
=======
        const result = await createAccount(data)

        if(result.error) return setError(result.error)

        if(!result.error) {
            setError(null)
        }

        localStorage.setItem("token", result.token)
        console.log("reg set token => ",localStorage.getItem("token"))
        navigate("/")
        window.location.reload()
        console.log("register result", result)
        

>>>>>>> 6106562092897977fe335d9cfcfc28b097ec9d69
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
                    <input type="text" style={{ margin: '0 10px' }}placeholder="First Name" value={firstname}onChange={ (e)=> setFirstname(e.target.value)}/>
                </div>
                <div className="input">
                    <img src="/assets/person.png" alt="Name Icon" />
                    <input type="text" style={{ margin: '0 10px' }}placeholder="Last Name" value={lastname}onChange={ (e)=> setLastname(e.target.value)}/>
                </div>
                <div className="input">
                    <img src="/assets/email2.png" alt="Email Icon" />
                    <input type="email" style={{ margin: '0 10px' }}placeholder="Email" value={email} onChange={ (e)=> setEmail(e.target.value)}/>
                </div>
                <div className="input">
                    <img src="/assets/password.png" alt="Password Icon" />
                    <input type="password" style={{ margin: '0 15px' }}placeholder="Password" value={password} onChange={ (e)=> setPassword(e.target.value)}/>
                </div>
                <div className="errorMessage">{error}</div>
            <div className="submit-container">
                <button className="submit" onClick={submitHandle}>Register</button>
            </div>
            </form>
        </div>
     );
}
 
export default Register;
