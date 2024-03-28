import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


let Header = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // let logout = (e) => {
    //     dispatch(signOutUser());
    //     navigate('/user');
    //     e.preventDefault()
    // }

    return (
        <>
                     {/* Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
            {userName == "" ?<b>    : Please Login to see other features</b>:""} */}
        
            <div>
            <h1>Vaccination Application</h1>
            <NavLink to="/admin" className="button" activeclassname="success">Admin Section</NavLink>
            <NavLink to="/patient" className="button" activeclassname="success">Patient Section</NavLink>
            <NavLink to="/patientLogin" className="button" activeclassname="success">Login</NavLink>
            {/* <button onClick={logout}>Logout</button> */}
            </div>
        </>
    )

}

export default Header;