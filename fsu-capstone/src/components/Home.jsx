import React, { useState, useEffect } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { fetchDepartments } from "../api";

const Home = () => {


  const departmentsToDisplay = 
  departments.filter((department) => department.name)

  return (
    <section className="background-image">
      <div className="home-content1">

      </div>
    </section>
  );
};

export default Home;
