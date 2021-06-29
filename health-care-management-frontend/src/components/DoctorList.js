import React,{useState,useEffect} from 'react';
import Header from './Header';
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';

function DoctorList() {
    const location = useLocation();
    let history= useHistory();

    const[doctors,setDoctors]=useState([])

    useEffect(() => {
        document.title='Doctors List';
        DataService.getAllDoctors().then(res=>{setDoctors(res)})

        window.onload = function() {
            if(!window.location.hash) {
                window.location = window.location + '#loaded';
                window.location.reload();
            }
        }
    }, [])

    function doctordetails(demail){
        history.push({
            pathname:'/doctorDetailsPatient',
            state:{name:location.state.name,email:location.state.email,demail:demail}
        });
    }

    const back=()=>{
        history.push({
            pathname: '/PatientHome',
            state: {name: location.state.name,email:location.state.email}
          });
    }

    return (
        <div>
            <Header />
            <div className='topnav'>
                <a href="/">Logout</a>
                <p>Welcome {location.state.name}</p>
            </div>
            <div className='pageBody'>
                <button className='back' onClick={back}>Back</button>
                <h2 style={{marginLeft:'90px'}}>List of Doctors</h2>
                {doctors.map(
                doctor => 
                    <div className='doctor' key = {doctor.email}>
                        <tr>
                            <td> <button className='doctordetails' onClick={()=>doctordetails(doctor.email)}>{doctor.name}</button></td>
                        </tr>
                        <tr>
                            <td style={{width:'25%'}}><b>Age : </b>{doctor.age}</td>
                            <td style={{width:'45%'}}><b>Specialization : </b>{doctor.special}</td>
                            <td style={{width:'35%'}}><b>Experience : </b>{doctor.experience} years</td>
                        </tr>
                    </div>
                )
            }
                
            </div>
        </div>
    )
}

export default DoctorList
