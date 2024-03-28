import * as ActionTypes from "../actiontypes";
import axios from "axios"

export const AddPatient = (patients)=>({
    type: ActionTypes.ADDPATIENT,
    payload: {patients}
})

export const signInPatient = (patient) => ({
    type: ActionTypes.SIGNIN,
    payload: {patient}
})


export const savePatient = (patient)=>{
    return function(dispatch){
        axios.post("http://localhost:9000/patient/save",{patient})
        .then((pats)=>{
            console.log(pats)
            dispatch(getAllPatients())
        })
        .catch(e=>console.log("Error in saving Patients",e.data))
    }
}
export const getAllPatients =()=>{
    return function(dispatch){
        axios.get("http://localhost:9000/patient/getPatient")
        .then((patients)=>dispatch(AddPatient(patients.data)))
        .catch(e=>console.log(e.data))
    }
}

export const logIn =(patient)=>{
    return function(dispatch){
    axios.post("http://localhost:9000/patient/signin",{patient})
    .then((patient)=>{
        dispatch(getAllPatients())
        dispatch(signInPatient(patient.data))
    })
    .catch(e=>console.log(e.data))
}

}


