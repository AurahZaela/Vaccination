import * as ActionTypes from "../actiontypes";
import axios from "axios"


export const saveVaccine = (vaccine)=>{
    return function(dispatch){
        axios.post("http://localhost:9000/vaccine/save",{vaccine})
        .then((vacs)=>{
            console.log(vacs)
            dispatch(getAll())
        })
        .catch(e=>console.log("Error in saving Vacs",e.data))
    }
}
export const getAllVaccines =()=>{
    return function(dispatch){
        axios.get("http://localhost:9000/vaccine/getVaccine")
        .then((vaccines)=>dispatch(AddVaccine(vaccines.data)))
        .catch(e=>console.log(e.data))
    }
}

export const AddVaccine = (vaccines)=>({
    type: ActionTypes.ADDVACCINE,
    payload: {vaccines}
})