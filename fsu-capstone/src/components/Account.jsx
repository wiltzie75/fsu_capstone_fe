import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAccount } from "../api";

const Account = ({ token }) => {
    const navigate = useNavigate();
    const [account, setAccount] = useState({});
    console.log("account =>", account)
    useEffect(() => {
        async function getAccountDetails() {
            const token = localStorage.getItem("token")
            const APIResponse = await fetchAccount(token);
            setAccount(APIResponse.user);
        }
        getAccountDetails();
    }, []);

//     =============example of syntax============

//     account: {
//     id: 18, 
//     firstName: "Josh",
//     lastName: "Balls", 
//     email: "balls@gmail.com", 
//     password: "$2b$10$hzF5pvO0cQO2qQupHa/juuSaRCODnBgC5NROkFP/9xSRGVz2cbeza", 
//     isAdmin: false
// }


    return ( 
        <div>
            {account &&
            <div>
                <h2>Welcome! {account.firstName}</h2>
            </div>
}
        </div>
     );
}

export default Account;