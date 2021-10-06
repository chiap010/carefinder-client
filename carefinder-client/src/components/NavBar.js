import React from "react";
import "../css/styles.css";

// NavBar - navigation bar display component
const NavBar = (props) => {
      return (
            <div className="topnav">
                  <a href="/">Home</a>
                  <a href="/AllHospitals">All Hospitals</a>
                  <a href="/HospitalName">Hospital Name</a>
                  <a href="/CityName">City</a>
                  <a href="/State">State</a>
                  <a href="/ZipCode">Zip Code</a>
                  <a href="/CountyName">County</a>
                  <a href="/HospitalID">Provider ID</a>
            </div>
      );
};

export default NavBar;
