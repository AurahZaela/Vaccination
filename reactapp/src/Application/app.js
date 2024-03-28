import React, {Component } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./app.css";

import HeaderComp from "./AppComponent/Common/HeaderComponent"
import FooterComp from "./AppComponent/Common/FooterComponent"
import RegisterVaccine from "./AppComponent/UniqueComponents/registerVaccine";
import RegisterHospital from "./AppComponent/UniqueComponents/registerHospital";

export default class ApplicationComponent extends Component{

    constructor(props){ 
        super(props); 

        this.state = { 
            name : "Joseph Tran",
            header : "10,001+ employees · UI Specialist"
        }
    }




    render(){

        return(
            <Router>
                <HeaderComp/>
                <Routes>
                    <Route path="/registerVaccine" element ={<RegisterVaccine/>}/>
                    <Route path="/registerHospital" element ={<RegisterHospital/>}/>
                </Routes>
                <FooterComp/>
            </Router>


        )


    }
}