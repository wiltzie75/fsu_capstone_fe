import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAccount } from "../api";

const Account = ({ token }) => {
    const {id} = useParams();
    // const navigate = useNavigate();
    const [account, setAccount] = useState(null);

    useEffect(() => {
        async function getAccountDetails() {
            const token = localStorage.getItem("token")
            const APIResponse = await fetchAccount(id, token);
            setAccount(APIResponse);
        }
        getAccountDetails();
    }, [id]);

    return ( 
        <>
        {account && (
            <div key={account.id} className="account-details">
                <h2>Welcome {account.firstname}</h2>
                <p>First name: {account.firstname}</p> 
                <p>Last name: {account.lastname}</p>
                <p>Email: {account.email}</p>
                <p>Password:</p> <p className="passwordfont">...Don't worry I wont show your password :D</p>
            </div>
        )}
        </>
     );
}

export default Account;