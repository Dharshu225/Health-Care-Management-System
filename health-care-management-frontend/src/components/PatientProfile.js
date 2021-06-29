import React,{useState,useEffect} from 'react';
import Header from './Header';
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';


function PatientProfile() {
    const location = useLocation();
    let history= useHistory();

    const[profile,setProfile]=useState([]);

    useEffect(() => {
        document.title='Profile';
        DataService.patientProfile(location.state.email).then(res=>{setProfile(res)});
    }, [])

    function navigateBack(){
        history.push({
            pathname: '/PatientHome',
            state: { name: location.state.name,email:location.state.email}
          });
    }

    function editProfile(){
        history.push({
            pathname: '/patientEditProfile',
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
                            <td>: {profile.name}</td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td>: {profile.age}</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>: {profile.gender}</td>
                        </tr>
                        <tr>
                            <th>Blood Group</th>
                            <td>: {profile.blood}</td>
                        </tr>
                        <tr>
                            <th>Date of Birth</th>
                            <td>: {profile.dob}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>: {profile.email}</td>
                        </tr>
                        <tr>
                            <th>Mobile</th>
                            <td>: {profile.mobile}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>: {profile.address}, {profile.city} - {profile.pincode}</td>
                        </tr>
                        <tr>
                            <th>District & State</th>
                            <td>: {profile.district}, {profile.state}</td>
                        </tr>
                    </table>
                    <button className="back"  onClick={navigateBack}>Back</button>
                    <button className="back"  onClick={editProfile} style={{backgroundColor:'royalblue'}}>Edit Profile</button>
                </div>
            </div>
        </div>
    )
}

export default PatientProfile
