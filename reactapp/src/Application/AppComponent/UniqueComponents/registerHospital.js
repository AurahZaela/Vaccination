import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveHospital } from "../../../State/Hospital/hospitalAction";

let RegisterHospital = () =>{
    const hospital = useSelector((state) => state.HospitalReducer.hospital)
    const dispatch = useDispatch();

    const [name, setName] = useState(hospital.name)
    const [address, setAddress] = useState(hospital.Address)
    const [type, setType] = useState(hospital.type)
    const [charges, setCharges] = useState(hospital.charges)


    let save = (e) => {
        let hosp = {name, address, type, charges};
        alert("Saving Hospital "+ JSON.stringify(hosp));
        dispatch(saveHospital(hosp));
        e.preventDefault();
    }


    return(
<>
        <h2>Register a Hospital</h2>
        <section className={"componentClass"}>

        <div className="form col-md-8">
                <div className="col-md-12">
                    <strong>Hospital Name</strong>
                    <input type="text" className="form-control col-md-6" value={name} maxLength={25}
                        placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div className="col-md-12">
                    <strong>Hospital Address</strong>
                    <input type="text" className="form-control col-md-6" value={address} maxLength={25}
                        placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
                </div>

                <div className="col-md-12">
                    <strong>Hospital Type</strong>
                    <input type="text" className="form-control col-md-6" value={type} maxLength={25}
                        placeholder="Govt/Private" onChange={(e)=>setType(e.target.value)}/>
                </div>

                <div className="col-md-12">
                    <strong>Hospital Charges</strong>
                    <input type="number" className="form-control col-md-6" value={charges}
                        placeholder="Minimum of $10,000 cuz this is America" onChange={(e)=>setCharges(e.target.value)}/>
                </div>

                <input type="button" className={"form-control btn btn-primary col-md-4"} 
                        value={"Save Hospital"} onClick={save}/>
        </div>
        </section>

</>
    )
}
export default RegisterHospital;