import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

let Admin = () => {
    const patient = useSelector((state) => state.PatientReducer.patient);
    console.log("Patient.name: ", patient.name);
    return (
        <>
        { patient.name === 'Admin' ? 
        <Fragment>
            <div>
                <hr/>
                <NavLink to="/registerVaccine" className="button">Register a Vaccine</NavLink>
                <NavLink to="/registerHospital" className="button">Register Hospital</NavLink>
                <NavLink to="/showHospital" className="button" >Known Hospitals</NavLink>
                <NavLink to="/approver" className="button" >Schedule Appointment</NavLink>
            </div>
        </Fragment>
        : <p>You must be Admin to access this page</p>
        } 
        </>
    )
}

export default Admin;