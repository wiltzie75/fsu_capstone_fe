import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
// import Departments from "./components/Departments";
// import Faculty from "./components/Faculty";
// import DepartmentDetailPage from "./components/DepartmentDetailPage";
// import FacultyDetailPage from "./components/FacultyDetailPage";
// import AdminPage from "./components/AdminPage";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Account from "./components/Account"

function App() {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLoginLogout = (value) => {
  //   setIsLoggedIn(value);
  // };

  return (
    <>
    <Navbar isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register token={token} setToken={setToken} />} />
        {/* <Route path="/departments" element={<Departments />} /> */}
        {/* <Route path="/faculty" element={<Faculty />} /> */}
        {/* <Route path="/department/:id" element={<DepartmentDetailPage />} /> */}
        {/* <Route path="/faculty/:id" element={<FacultyDetailPage />} /> */}
        {/* <Route path="/admin" element={<AdminPage />} /> */}
        <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
        <Route path="/user/:id" element={<Account token={token}/>} />
      </Routes>
    </>
  );
}

export default App;
