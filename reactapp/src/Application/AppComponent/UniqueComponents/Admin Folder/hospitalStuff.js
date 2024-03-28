import React, {Fragment, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";



export default function Hospital (props) {
    
   
   
   
   
   
   
    return (
    <>
        <td>{props.hospital.name}</td>
        <td>{props.hospital.address}</td>
        <td>{props.hospital.type}</td>
        <td>{props.hospital.charges}</td>
    </>
        
        )
}