import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';


//import {thunk} from "redux-thunk"; 
import VaccineReducer from "./Vaccine/vaccineReducer";
import HospitalReducer from "./Hospital/hospitalReducer";
import PatientReducer from "./Patient/patientReducer";
import AppointmentReducer from "./Appointment/appointmentReducer";

const rootReducer = combineReducers({
    VaccineReducer,
    HospitalReducer,
    PatientReducer,
    AppointmentReducer

})


export default configureStore(
    {reducer : rootReducer},
    {},//inital state if we want to set from store instead of reducer
    //applyMiddleware(thunk)
)