import React,{useState,useEffect} from 'react';
import Header from './Header';
import { useHistory,useLocation } from 'react-router';
import DataService from '../service/DataService';

function PatientEditProfile() {
    let history= useHistory();
    const location = useLocation();

    const[name,setName]=useState("");
    const[gender,setGender]=useState("");
    const[age,setAge]=useState("");
    const[blood,setBlood]=useState("");
    const[dob,setDob]=useState("");
    const[address,setAddress]=useState("");
    const[city,setCity]=useState("");
    const[district,setDitrict]=useState("");
    const[state,setState]=useState("");
    const[pincode,setPincode]=useState("");
    const[mobile,setMobile]=useState("");
    const[password,setPassword]=useState("");
    const[cpassword,setCpassword]=useState("");
    const type='Patient';
    const email=location.state.email;

    useEffect(() => {
        document.title='Edit Profile';
    }, [])

    function handleSubmit(){
        let patient={
            email:email,name:name, gender:gender, age:age, blood:blood, dob:dob,
            address:address, city:city, district:district, state:state , pincode:pincode,
            mobile:mobile, password:password, type:type
            
        }
        if(DataService.patientEditProfile(patient)){
            history.push({
                pathname: '/PatientHome',
                state: { name: location.state.name,email:location.state.email}
              });
        }
    }

    function validateForm() {
        return name!=="" && gender!=="Choose..." && age!=="" && blood!=="Choose..." && dob!=="" && 
        address!=="" && city!=="" && district!=="" && state!=="" && pincode!=="" && mobile.length===10 &&
        password.length>=6 && password.length<=12 && type!=="" && password===cpassword;
    }

    function navigate(){
        history.push({
            pathname: '/patientProfile',
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
            <button id='newUserBack' onClick={navigate}>Back</button>
            <div className='newUserBody'>
                <h2>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name</label><br></br>
                    <input type='text' name='name' 
                            value={name} onChange={(e)=>{setName(e.target.value)}}/><br></br>

                    <label>Email</label><br></br>
                    <input type='text' name='email' 
                            value={email} disabled/><br></br>
                    
                    <label>Gender</label><br></br>
                    <select type='text' name='gender' 
                            value={gender} onChange={(e)=>{setGender(e.target.value)}}>
                                <option>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                    </select><br></br>

                    <label>Age</label><br></br>
                    <input type='text' name='age' 
                            value={age} onChange={(e)=>{setAge(e.target.value)}}/><br></br>
                            
                    <label>Blood Group</label><br></br>
                    <select type='text' name='blood' 
                            value={blood} onChange={(e)=>{setBlood(e.target.value)}}>
                                <option>Choose...</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>O+</option>
                                <option>O-</option>
                    </select><br></br>

                    <label>Date of Birth</label><br></br>
                    <input type='text' name='dob' placeholder='dd-mm-yyyy'
                            value={dob} onChange={(e)=>{setDob(e.target.value)}}/><br></br>

                    <label>Address</label><br></br>
                    <input type='text' name='address' 
                            value={address} onChange={(e)=>{setAddress(e.target.value)}}/><br></br>

                    <label>City</label><br></br>
                    <input type='text' name='city' 
                            value={city} onChange={(e)=>{setCity(e.target.value)}}/><br></br>

                    <label>District</label><br></br>
                    <input type='text' name='district' 
                            value={district} onChange={(e)=>{setDitrict(e.target.value)}}/><br></br>

                    <label>State</label><br></br>
                    <input type='text' name='state' 
                            value={state} onChange={(e)=>{setState(e.target.value)}}/><br></br>

                    <label>Pincode</label><br></br>
                    <input type='text' name='pincode' 
                            value={pincode} onChange={(e)=>{setPincode(e.target.value)}}/><br></br>

                    <label>Mobile Number</label><br></br>
                    <input type='text' name='mobile' 
                            value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/><br></br>
                    
                    <label>Password</label><br></br>
                    <input type='password' name='password' 
                            value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br></br>
                    {(password.length>0 && (password.length<6 || password.length>12)) &&
                                <p id='error'>Password must be 6 - 12 characters</p>}
                    <label>Confirm Password</label><br></br>
                    <input type='password' name='cpassword' 
                            value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}/><br></br>
                    {(cpassword.length>0 && password!==cpassword) &&<p id='error'>Password and Confirm Password must be same</p>}
                    <button type='submit' className='loginbtn' disabled={!validateForm()}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default PatientEditProfile