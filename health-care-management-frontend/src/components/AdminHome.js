import React,{useState,useEffect} from 'react';
import Header from './Header';
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';

function AdminHome() {
    const location = useLocation();
    let history= useHistory();

    const[doctors,setDoctors]=useState([])

    useEffect(() => {
        document.title='Admin Home';
        DataService.getAllDoctors().then(res=>{setDoctors(res)})

        window.onload = function() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
    }, [])

    const addDoctor=()=>{
        history.push({
            pathname: '/addDoctor',
            state: {name: location.state.name}
          });
    }

    const patientList=()=>{
        history.push({
            pathname: '/patientList',
            state: {name: location.state.name}
          });
    }

    function doctordetails(demail){
        history.push({
            pathname:'/doctorDetails',
            state:{name:location.state.name,demail:demail}
        });
    }

    function deleteDoctor(demail){
        DataService.deleteDoctor(demail)
        window.location.reload();
    }

    return (
        <div>
            <Header />
            <div className='topnav'>
                <a href="/">Logout</a>
                <a onClick={patientList} style={{cursor:'pointer'}}>Patients List</a>
                <p>Welcome {location.state.name}</p>
                
            </div>
            <div className='pageBody'>
                <button id='addDoctor' onClick={addDoctor}>Add Doctor</button>
                <h2 style={{marginLeft:'100px'}}>List of Doctors</h2>
                {doctors.length===0 && <h4>No doctors available</h4>}
                {doctors.map(
                doctor => 
                    <div className='doctor' key = {doctor.email}>
                        <tr>
                            <td> <button className='doctordetails' onClick={()=>doctordetails(doctor.email)}>{doctor.name}</button></td>
                            <td></td>
                            <td style={{paddingRight:'10px'}}><button className='link' onClick={()=>deleteDoctor(doctor.email)}>
                                    Delete</button></td>
                        </tr>
                        <tr>
                            <td><b>Age : </b>{doctor.age}</td>
                            <td style={{paddingRight:'30px'}}><b>Specialization : </b>{doctor.special}</td>
                            <td><b>Experience : </b>{doctor.experience} years</td>
                        </tr>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default AdminHome
