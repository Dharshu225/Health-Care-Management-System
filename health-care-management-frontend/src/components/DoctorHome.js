import React,{useState,useEffect} from 'react';
import Header from './Header';
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';

function DoctorHome() {
    const location = useLocation();
    let history= useHistory();

    const[appointments,setAppointments]=useState([])
    //const [valid,setValid]=useState(true);

    useEffect(() => {
        document.title='Doctor Home';
        DataService.getAllDoctorAppointments(location.state.email).then(res=>{setAppointments(res)})

        window.onload = function() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
    }, [])

    function changeStatus(aid,status) {
        DataService.changeStatus(aid,status);
        window.location.reload();
    }

    function addPrescription(aid) {
        history.push({
            pathname: '/addPrescription',
            state: {name: location.state.name,email:location.state.email,aid:aid}
          });
    }

    const doctorProfile=()=>{
        history.push({
            pathname: '/doctorProfile',
            state: {name: location.state.name,email:location.state.email}
          });
    }

    return (
        <div>
            <Header />
            <div className='topnav'>
                <a href="/">Logout</a>
                <a onClick={doctorProfile} style={{cursor:'pointer'}}>Profile</a>
                <p>Welcome {location.state.name}</p>
                
            </div>
            <div className='pageBody'>
                <h2>List of Appointments</h2>
                {appointments.length===0 && <h4>No appointments available</h4>}
                    {appointments.map(
                    temp => 
                        <div className='doctor' key = {temp.aid}>
                            <tr>
                                <td><b>Patient name</b> - {temp.pname}</td>
                                <td></td>
                                <td>
                                    {(() => {
                                        if(temp.status==='Pending'){ 
                                            return(<div>
                                                <td><button id='accept' onClick={()=>changeStatus(temp.aid,'Accepted')}>Accept</button></td>
                                                <td><button id='reject' onClick={()=>changeStatus(temp.aid,'Rejected')}>Reject</button></td>
                                            </div>) }
                                        else if(temp.status==='Accepted'){
                                            return(<div>
                                                <td><button id='accepted' onClick={()=>addPrescription(temp.aid)}>Add Prescription</button></td>
                                            </div>) }
                                        else{
                                            return(<div>
                                                <td><button id='rejected' disabled>Rejected</button></td>
                                            </div>)}
                                    })()}
                                </td>
                            </tr>
                            <tr>
                                <td style={{width:'45%'}}><b>Appointment Date : </b>{temp.adate.split("-")[2]+"-"+
                                                                                                temp.adate.split("-")[1]+"-"+
                                                                                                temp.adate.split("-")[0]}</td>
                                <td style={{width:'30%'}}><b>Slot : </b>{temp.slot}</td>
                                <td style={{width:'30%'}}><b>Status : </b>{temp.status}</td>
                            </tr>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}

export default DoctorHome
