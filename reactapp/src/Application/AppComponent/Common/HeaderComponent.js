import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


let Header = ()=> {
    

    return(
        <>
            <h1>This is the Vaccination Application</h1>
            <NavLink to="/registerVaccine" className = "button">Vaccine Registration</NavLink>
            <NavLink to="/registerHospital" className = "button">Hospital Registration</NavLink>

        </>
    )
}

export default Header;