import React, {Fragment, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllHospitals } from "../../../../State/Hospital/hospitalAction";
import Hospitals from "./hospitalStuff"


let showHospital = ()=>{

    let hospitalList = useSelector((state)=>state.HospitalReducer.hospitals)
    let dispatch = useDispatch();


    useEffect(() =>{
        dispatch(getAllHospitals())
    }, [])


    return(
        <>
            <div className = "col-md-12">
                <h1>Registered Hospitals</h1>
                {console.log(hospitalList)}
                {hospitalList && hospitalList.length >=0 ?
                    
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Type</th>
                            <th>Charges</th>

                        </tr>
                        </thead>

                        <tbody>
                            {
                                hospitalList.map(hospital=>{
                                     return <tr><Hospitals hospital={hospital} key={hospital._id}/></tr>
                                })
                            }
                        </tbody>

                    </table>
                    :
                    <h2>Hospitals will be shown here</h2>
                }

            </div>
            </>
        
    )
}

export default showHospital