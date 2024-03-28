import React, {Component } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./app.css";

import HeaderComp from "./AppComponent/Common/HeaderComponent"
import FooterComp from "./AppComponent/Common/FooterComponent"
import RegisterVaccine from "./AppComponent/UniqueComponents/Admin Folder/registerVaccine";
import RegisterHospital from "./AppComponent/UniqueComponents/Admin Folder/registerHospital";
import ShowHospital from "./AppComponent/UniqueComponents/Admin Folder/showHospitalsComponent";
import PatientRegister from "./AppComponent/UniqueComponents/Patients Folder/PatientRegister"
import Approver from "./AppComponent/UniqueComponents/Admin Folder/approverScr";
import Admin from "./AppComponent/UniqueComponents/Admin Folder/admin";

export default class ApplicationComponent extends Component{

    constructor(props){ 
        super(props); 

    }




    render(){

        return(
            <Router>
                <HeaderComp/>
                <Routes>
                    <Route path="/registerVaccine" element ={<RegisterVaccine/>}/>
                    <Route path="/registerVaccine" element ={<RegisterVaccine/>}/>
                    <Route path="/registerHospital" element ={<RegisterHospital/>}/>
                    <Route path="/showHospital" element ={<ShowHospital/>}/>
                    <Route path="/patientLogin" element ={<PatientRegister/>}/>
                    <Route path="/approver" element ={<Approver/>}/>
                    <Route path="/admin" element ={<Admin/>}/>
                </Routes>
                <FooterComp/>
            </Router>


        )


    }
}