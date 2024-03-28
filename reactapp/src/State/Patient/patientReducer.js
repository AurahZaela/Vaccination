import * as ActionTypes from "../actiontypes";
// following products
const INITIAL_STATE = {
    
    patient: {
        name: "Admin",
        age: 0,
        profession: "Unemployed",
        contact: 0,
        address: "123 St ST ",
        gender: "Male or Female ",
        diseases: "None",
        medicalcertificate: "None",
        etc: "Notes?"
    },
    patients:[]
}
export default function PatientReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        
        case ActionTypes.ADDPATIENT:            
            return {...state, patients:action.payload.patients};



            case ActionTypes.SIGNIN:
                console.log("Signing Patient In")
                return {...state, patient: action.payload.patient}    


                default:
                    return state;     
    }

    
} 