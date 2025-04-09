import { useState } from "react";
import "./app.css"
import { Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Home";
// import Departments from "./components/Departments";
// import Faculty from "./components/Faculty";
// import DepartmentDetailPage from "./components/DepartmentDetailPage";
// import FacultyDetailPage from "./components/FacultyDetailPage";
// import AdminPage from "./components/AdminPage";
import Navbar from "./components/Navbar";
import Register from "./components/register";


function App() {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = (value) => {
    setIsLoggedIn(value);
  };

  return (
    <>
    <Navbar isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" />
        <Route path="/register" element={<Register/>} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/departments" element={<Departments />} /> */}
        {/* <Route path="/faculty" element={<Faculty />} /> */}
        {/* <Route path="/department/:id" element={<DepartmentDetailPage />} /> */}
        {/* <Route path="/faculty/:id" element={<FacultyDetailPage />} /> */}
        {/* <Route path="/admin" element={<AdminPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
