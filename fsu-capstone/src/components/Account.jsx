import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAccount } from "../api";

const Account = ({ token }) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [account, setAccount] = useState(null);

    useEffect(() => {
        async function getAccountDetails() {
            const token = localStorage.getItem("token")
            const APIResponse = await fetchAccount(token);
            setAccount(APIResponse);
        }
        getAccountDetails();
    })

    return ( 
        <>
        {account && (
            <div key={account.id} id="account-details">
                <h2>Welcome {account.email}</h2>
                <p>First name: {account.firstname}</p> 
                <p>Last name: {account.lastname}</p>
            </div>
        )}
        </>
     );

}

export default Account;