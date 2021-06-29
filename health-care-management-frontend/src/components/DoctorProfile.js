import React,{useState,useEffect} from 'react';
import Header from './Header';
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';

function DoctorProfile() {
    const location = useLocation();
    let history= useHistory();

    const[doctor,setDoctor]=useState([]);

    useEffect(() => {
        document.title='Profile';
        DataService.doctorProfile(location.state.email).then(res=>{setDoctor(res)});
    }, [])

    function navigateBack(){
        history.push({
            pathname: '/DoctorHome',
            state: { name: location.state.name,email:location.state.email}
          });
    }

    function editProfile(){
        history.push({
            pathname: '/doctorEditProfile',
            state: { name: location.state.name,email:location.state.email}
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
                <h2>Profile</h2>
                <div className='profile'>
                <table className='doctorDetails'>
                        <tr>
                            <th>Name</th>
                            <td>: {doctor.name}</td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td>: {doctor.age}</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>: {doctor.gender}</td>
                        </tr>
                        <tr>
                            <th>Blood Group</th>
                            <td>: {doctor.blood}</td>
                        </tr>
                        <tr>
                            <th>Date of Birth</th>
                            <td>: {doctor.dob}</td>
                        </tr>
                        <tr>
                            <th>Qualification</th>
                            <td>: {doctor.qualification}</td>
                        </tr>
                        <tr>
                            <th>Specialization</th>
                            <td>: {doctor.special}</td>
                        </tr>
                        <tr>
                            <th>Experience</th>
                            <td>: {doctor.experience} years</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>: {doctor.email}</td>
                        </tr>
                        <tr>
                            <th>Mobile</th>
                            <td>: {doctor.mobile}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>: {doctor.address} - {doctor.pincode}</td>
                        </tr>
                        <tr>
                            <th>District & State</th>
                            <td>: {doctor.district}, {doctor.state}</td>
                        </tr>
                    </table>
                    <button className="back"  onClick={navigateBack}>Back</button>
                    <button className="back"  onClick={editProfile} style={{backgroundColor:'royalblue'}}>Edit Profile</button>
                </div>
            </div>
        </div>
    )
}

export default DoctorProfile
