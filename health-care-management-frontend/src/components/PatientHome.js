import React,{useState,useEffect} from 'react';
import Header from './Header';
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';

function PatientHome() {
    const location = useLocation();
    let history= useHistory();

    const[appointments,setAppointments]=useState([])

    useEffect(() => {
        document.title='Patient Home';
        DataService.getAllPatientAppointments(location.state.email).then(res=>{setAppointments(res)})

        window.onload = function() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
    }, [])

    const doctorList=()=>{
        history.push({
            pathname: '/doctorList',
            state: {name: location.state.name,email:location.state.email}
          });
    }

    const patientProfile=()=>{
        history.push({
            pathname: '/patientProfile',
            state: {name: location.state.name,email:location.state.email}
          });
    }

    function deleteAppointment(aid){
        DataService.deleteAppointment(aid)
        window.location.reload();
    }

    function viewPrescription(aid) {
        history.push({
            pathname: '/viewPrescription',
            state: {name: location.state.name,email:location.state.email,aid:aid}
          });
    }

    return (
        <div>
            <Header />
            <div className='topnav'>
                <a href="/">Logout</a>
                <a onClick={patientProfile} style={{cursor:'pointer'}}>Profile</a>
                <a onClick={doctorList} style={{cursor:'pointer'}}>Doctors List</a>
                <p>Welcome {location.state.name}</p>
            </div>
            <div className='pageBody'>
                <h2>List of Appointments</h2>
                {appointments.length===0 && <h4>No appointments available</h4>}
                {appointments.map(
                temp => 
                    <div className='doctor' style={{maxWidth:'650px'}} key = {temp.aid}>
                        <tr>
                            <td><b>Doctor name</b> - {temp.dname}</td>
                            <td></td>
                            <td>
                            {(() => {
                                if(temp.status==='Accepted'){
                                    return(<div>
                                        <td><button id='accepted' onClick={()=>viewPrescription(temp.aid)}>Prescription</button></td>
                                                
                                    </div>) }
                                else{
                                    return(<div>
                                        <td></td>
                                        <td></td>
                                        <td style={{paddingRight:'10px'}}><button className='link' onClick={()=>deleteAppointment(temp.aid)}>
                                                Delete</button></td>
                                        <td></td>
                                    </div>) }
                            })()}
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:'45%'}}><b>Appointment Date : </b>{temp.adate.split("-")[2]+"-"+
                                                                                            temp.adate.split("-")[1]+"-"+
                                                                                            temp.adate.split("-")[0]}</td>
                            <td style={{width:'30%'}}><b>Slot : </b>{temp.slot}</td>
                            <td style={{width:'35%'}}><b>Status : </b>{temp.status}</td>
                        </tr>
                    </div>
                )
            }
                
            </div>
        </div>
    )
}

export default PatientHome
