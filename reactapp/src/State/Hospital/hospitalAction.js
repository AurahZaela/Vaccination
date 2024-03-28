import * as ActionTypes from "../actiontypes";
import axios from "axios"


export const AddHospitals = (hospitals)=>({
    type:ActionTypes.ADDHOSPITAL, payload:{hospitals}
})


export const saveHospital = (hospital)=>{
    return function(dispatch){
        axios.post("http://localhost:9000/hospital/save",{hospital})
        .then(()=>dispatch(getAllHospitals()))
        .catch(e=>console.log("Error in saving Hospital",e.data))
    }
}
export const getAllHospitals =()=>{
    return function(dispatch){
        axios.get("http://localhost:9000/hospital/getHospital")
        .then((hospitals)=>dispatch(AddHospitals(hospitals.data)))
        .catch(e=>console.log(e.data))
    }
}
