import React,{useState,useEffect} from 'react';
import Header from './Header';
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';

function PatientList() {
    const location = useLocation();
    let history= useHistory();

    const[patients,setPatients]=useState([])

    useEffect(() => {
        document.title='Patient List';
        DataService.getAllPatients().then(res=>setPatients(res));
    }, [])

    function navigateBack(){
        history.push({
            pathname: '/AdminHome',
            state: { name: location.state.name}
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
                <button className="back"  onClick={navigateBack}>Back</button>
                <h2 style={{marginLeft:'100px'}}>List of Patients</h2>
                <table className='patientListTable'>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Mobile</th>
                        <th>Age</th>
                        <th>Blood Group</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>District & State</th>
                    </tr>
                    {patients.map(
                        user => 
                            <tr className='user' key = {user.email}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.age}</td>
                                    <td>{user.blood}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.address}, {user.city} - {user.pincode}</td>
                                    <td>{user.district}, {user.state}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default PatientList
