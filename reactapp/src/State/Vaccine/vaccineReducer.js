import * as ActionTypes from "../actiontypes";
// following products
const INITIAL_STATE = {
    
    vaccine : {
        name: "Vaccine",
        price: 0,
        type: "type",
        sideEffects: "sideEffects",
        origin: "origin",
        doses: 0,
        otherInfo: "otherInfo"
    },
    vaccines: []
}
export default function VaccineReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        
        case ActionTypes.ADDVACCINE:            
            return {...state, vaccines:action.payload.vaccines};
        default:
            return state;
    }
} 