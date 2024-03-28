import * as ActionTypes from "../actiontypes";
// following products
const INITIAL_STATE = {
    
    hospital: {
        name: "Hospital",
        Address: "Address",
        type: "Government or Private",
        charges: 0
    }
    ,
    hospitals:[]
}
export default function HospitalReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        
        case ActionTypes.ADDHOSPITAL:            
            return {...state, hospitals:action.payload.hospitals};
        default:
            return state;
    }
} 