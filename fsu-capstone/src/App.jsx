import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
// import Departments from "./components/DepartmentList";
import FacultyList from "./components/FacultyList";
import DepartmentDetailPage from "./components/DepartmentDetail";
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
        <Route path="/faculty" element={<FacultyList />} />
        <Route path="/department/:id" element={<DepartmentDetailPage token={token}/>} />
        {/* <Route path="/faculty/:id" element={<FacultyDetailPage />} /> */}
        {/* <Route path="/admin" element={<AdminPage />} /> */}
        <Route path="/login" element={<Login token={token} setToken={setToken}/>} />
        <Route path="/user/:id" element={<Account token={token} isLoggedIn={setIsLoggedIn}/>} />
      </Routes>
    </>
  );
}

export default App;
