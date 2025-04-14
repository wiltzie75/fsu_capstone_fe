import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
// import Departments from "./components/DepartmentList";
import FacultyList from "./components/FacultyList";
import DepartmentDetailPage from "./components/DepartmentDetail";
import FacultyDetail from "./components/FacultyDetail";
// import AdminPage from "./components/AdminPage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Account from "./components/Account";
import Register  from "./components/Register";

function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/departments" element={<Departments />} /> */}
        <Route path="/faculty" element={<FacultyList />} />
        <Route path="/department/:id" element={<DepartmentDetailPage />} />
        <Route path="/faculty/:id" element={<FacultyDetail />} />
        {/* <Route path="/admin" element={<AdminPage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
