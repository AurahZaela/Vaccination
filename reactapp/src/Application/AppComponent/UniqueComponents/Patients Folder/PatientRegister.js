import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../../State/Patient/patientAction";

let PatientSign = () =>{
    const patient = useSelector((state) => state.PatientReducer.patient)
    const dispatch = useDispatch();

    const [name, setName] = useState(patient.name)
    const [age, setAge] = useState(patient.age)
    const [profession, setProfession] = useState(patient.profession)
    const [contact, setContact] = useState(patient.contact)
    const [address, setAddress] = useState(patient.address)
    const [gender, setGender] = useState(patient.gender)
    const [diseases, setDisease] = useState(patient.diseases)
    const [medicalcertificate, setMC] = useState(patient.medicalcertificate)
    const [etc, setNote] = useState(patient.etc)

    const submit = (e)=>{
        let patient = {
          name,
          age,
          profession,
          contact,
          address,
          gender,
          diseases,
          medicalcertificate,
          etc
        }
        dispatch(logIn(patient)) 
        e.preventDefault();
    }


    return(
<>
        <h2>New or Returning Patient</h2>
        <section className={"componentClass"}>

        <div className="form col-md-8">
                <div className="col-md-12">
                    <strong>Patient Name</strong>
                    <input type="text" className="form-control col-md-6" value={name} maxLength={25}
                        placeholder=" " onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div className="col-md-12">
                    <strong>Patient Age</strong>
                    <input type="number" className="form-control col-md-6" value={age} maxLength={250}
                        placeholder="Address" onChange={(e)=>setAge(e.target.value)}/>
                </div>

                <div className="col-md-12">
                    <strong>Patient Profession</strong>
                    <input type="text" className="form-control col-md-6" value={profession} maxLength={25}
                        placeholder="Govt/Private" onChange={(e)=>setProfession(e.target.value)}/>
                </div>

                <div className="col-md-12">
                    <strong>Patient Contact</strong>
                    <input type="number" className="form-control col-md-6" value={contact}
                        placeholder="Minimum of $10,000 cuz this is America" onChange={(e)=>setContact(e.target.value)}/>
                </div>

                <div className="col-md-12">
                    <strong>Patient Address</strong>
                    <input type="text" className="form-control col-md-6" value={address} maxLength={25}
                        placeholder=" " onChange={(e)=>setAddress(e.target.value)}/>
                </div>

                <div className="col-md-12">
                    <strong>Patient Gender</strong>
                    <input type="text" className="form-control col-md-6" value={gender} maxLength={25}
                        placeholder="Male, Female, Non-Binary, Transgender, Undefined " onChange={(e)=>setGender(e.target.value)}/>
                </div>

                <div className="col-md-12">
                    <strong>Patient Diseases</strong>
                    <input type="text" className="form-control col-md-6" value={diseases} maxLength={25}
                        placeholder=" " onChange={(e)=>setDisease(e.target.value)}/>
                </div>

                <div className="col-md-12">
                    <strong>Patient Medical Certificate</strong>
                    <input type="text" className="form-control col-md-6" value={medicalcertificate} maxLength={25}
                        placeholder=" " onChange={(e)=>setMC(e.target.value)}/>
                </div>

                <div className="col-md-12">
                    <strong>Patient Notes</strong>
                    <input type="text" className="form-control col-md-6" value={etc} maxLength={25}
                        placeholder=" " onChange={(e)=>setNote(e.target.value)}/>
                </div>

                <br/>

                <input type="submit" className={"form-control btn btn-primary col-md-4"} 
                        value="Login" onClick={submit}/>
        </div>
        </section>
     
</>
    )
}
export default PatientSign;