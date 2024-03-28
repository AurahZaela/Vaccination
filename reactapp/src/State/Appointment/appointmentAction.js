import * as ActionTypes from "./actionTypes";
import axios from 'axios';

export const saveAppointment=(appointment)=>{
    return function (dispatch){
    axios.post("http://localhost:9000/appointment/save",{appointment})
    .then(()=>dispatch(getAll()))
    }
}

export const getAllApp = () =>{
    return function(dispatch){
        axios.get("http://localhost:9000/appointment/getAppoint")
        .then((apps)=>dispatch(addAppointment(apps.data)))
        .catch(e=>console.log(e))
    }
}

export const updateAppointment = (id) =>{
    return function(dispatch){
        axios.post(`http://localhost:9000/appointment/update`,{id:id})
        .then(()=>{
            axios.get("http://localhost:9000/appointment/getAppoint")
        .then((apps)=>dispatch(addAppointment(apps.data)))
        .catch(e=>console.log(e))
        })
        .catch(e=>console.log(e))
    }
}

export const addAppointment = (appointments)=>({
    type: ActionTypes.ADDAPPOINTMENTS, payload:{appointments}
})