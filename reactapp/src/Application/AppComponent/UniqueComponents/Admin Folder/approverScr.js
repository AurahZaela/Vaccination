import React, { useState, useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllHospitals} from "../../../../State/Hospital/hospitalAction"
import {getAllVaccines} from "../../../../State/Vaccine/vaccineAction"
import Datetime from 'react-datetime';
import { useNavigate } from "react-router-dom";


let Approver = () => {

    const hospitalList = useSelector((state) => state.HospitalReducer.hospitals)
    const vaccineList = useSelector((state) => state.VaccineReducer.vaccines)
    const patientList = useSelector((state)=> state.PatientReducer.patients)



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllHospitals());
        dispatch(getAllVaccines());
    }, [])


    const [hospitalid, setHospitalId] = useState("hospital id")
    const [vaccineid, setVaccineId] = useState("vaccine id")
    const [patientId, setPatientId] = useState("patient id")
    const [date, setDate] = useState("")

    let nav = useNavigate()
    let save = (evt) => {
        let patient;
        patient = patientList.filter((patient)=>patient._id==patientId)[0]
        console.log(patient)
        for(let i = 0; i < patientList.length; i++) {
            if(patientList[i]._id === patientId) {
                patient = patientList[i];
            }
        }
        console.log(patient)
        let hospital;
        for(let i = 0; i < hospitalList.length; i++) {
            if(hospitalList[i]._id === hospitalid) {
                hospital = hospitalList[i];
            }
        }

        let vaccine;
        for(let i = 0; i < vaccineList.length; i++) {
            if(vaccineList[i]._id === vaccineid) {
                vaccine = vaccineList[i];
            }
        }
        const appointment = {
            patient, hospital, vaccine,
            date: date, paid: false
        }
        alert("We are going to save this appointment - "+ JSON.stringify(appointment));
        dispatch(saveAppointment(appointment));
        nav("/allAppointments")
        evt.preventDefault();
    }

    return (
        <>
        <h2>Appointment Approver Screen</h2>
        <b>patient</b>
        <select value={patientId} onChange={(e)=>setPatientId(e.target.value)}>
            <option value={"dummyid"}>Choose a patient</option>
            {patientList.map((patient) => (
            <option value={patient._id}>{patient.name}</option>
            ))}
        </select>
        <b>Hospital</b>
        <select value={hospitalid} onChange={(e)=>setHospitalId(e.target.value)}>
            <option value={"dummyid"}>Choose a Hospital</option>
            {hospitalList.map((hospital) => (
            <option value={hospital._id}>{hospital.name}</option>
            ))}
        </select>
        <b>Vaccine</b>
        <select value={vaccineid} onChange={(e)=>setVaccineId(e.target.value)}>
            <option value={"dummyid"}>Choose a Vaccine</option>
            {vaccineList.map((vaccine) => (
            <option value={vaccine._id}>{vaccine.name}</option>
            ))}
        </select>
        <b>Select Date and Time</b>
        <Datetime format="dd-MMM-yy hh:mm a" locale='en' onChange={(date)=>setDate(date)}/>
        <input type="button" className={"form-control btn btn-primary col-md-3"} 
            value={"Save Appointment"} 
            onClick={save}/>
        </>
    )
}

export default Approver;