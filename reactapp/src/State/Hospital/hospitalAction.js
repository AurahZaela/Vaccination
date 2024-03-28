import * as ActionTypes from "../actiontypes";
import axios from "axios"


export const saveHospital = (hospital)=>{
    return function(dispatch){
        axios.post("http://localhost:9000/hospital/save",{hospital})
        .then((hosp)=>{
            console.log(hosp)
            dispatch(getAll())
        })
        .catch(e=>console.log("Error in saving Hospital",e.data))
    }
}
export const getAllHospitals =()=>{
    return function(dispatch){
        axios.get("http://localhost:9000/hospital/getHospital")
        .then((hospitals)=>dispatch(AddHospital(hospitals.data)))
        .catch(e=>console.log(e.data))
    }
}

export const AddHospital = (hospitals)=>({
    type: ActionTypes.ADDHOSPITAL,
    payload: {hospitals}
})