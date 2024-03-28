import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { updateAppointment } from "../../../State/Appointment/appointmentAction";
import { useNavigate } from "react-router-dom";

let AppointmentComponent = ({appointment, parent}) => {
    const appointmentDate = appointment.date;
    const hospital = appointment.hospital;
    const vaccine = appointment.vaccine;
    const patient = appointment.user;
    const readableDate = new Date(appointmentDate);
    const timeElaspsed = Date.now() - new Date(appointmentDate)
    const Total = vaccine.price
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleClick = () => {
        dispatch(updateAppointment(appointment._id));
        //navigate('/payment',{state: appointment});
    }
    return (
        <>
            { parent=="Admin"|| (parent!="Admin" && timeElaspsed < 0) ? <Fragment>
                <table>
                    <thead>
                    <tr>
                        <th>Patient</th>
                        <th>Location</th>
                        <th>Time</th>
                        <th>Address</th>
                        <th>Type</th>
                        <th>Vaccine</th>
                        <th>Dose</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><b style={{color:"purple"}}>{patient.name}</b></td>
                        <td>{hospital.name}</td>
                        <td>{readableDate.toLocaleString()}</td>
                        <td>{hospital.address}</td>
                        <td>{hospital.type}</td>
                        <td>{vaccine.name}</td>
                        <td>{vaccine.doses}</td>
                        <td>{vaccine.price}</td>
                    </tr>
                    </tbody>
                </table>
                { parent=="User" && !appointment.paid ? 
                <Fragment>
                <h3>{`Total Charges: $${Total}`}</h3>
                <button onClick={() => handleClick()}>Pay Charges</button>
                </Fragment>
            : <strong>All Paid Up!</strong>}
            <br/>
                </Fragment>
            : <p>Vaccinated with <b>{vaccine.name}</b> on {readableDate.toLocaleString()}</p>
            }
        </>
    )
}

export default AppointmentComponent;