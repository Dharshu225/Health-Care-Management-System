import React,{useState,useEffect} from 'react';
import Header from './Header';
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';
//import moment from 'moment';
//import Datetime from 'react-datetime';

function BookAppointment() {
    const location = useLocation();
    let history= useHistory();

    const[adate,setAdate]=useState("");
    const[slot,setSlot]=useState("");

    useEffect(() => {
        document.title='Book Appointment';
    }, [])

    function validateForm() {
        return adate!=="" && slot!=="Choose...";
    }

    function handleSubmit(){
        let appointment={
            patient:location.state.email,dname:location.state.dname,pname:location.state.name, doctor:location.state.demail, adate:adate, slot:slot, status:'Pending'
        }
        if(DataService.createAppointment(appointment)){
            history.push({
                pathname: '/doctorList',
                state: {name: location.state.name,email:location.state.email}
            });
        }
    }

    function navigateBack(){
        history.push({
            pathname: '/doctorList',
            state: {name: location.state.name,email:location.state.email}
        });
    }

    /*const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
    return current.isAfter(yesterday);
    };*/

    return (
        <div>
            <Header />
            <div className='topnav'>
                <a href="/">Logout</a>
                <p>Welcome {location.state.name}</p>
            </div>
            <div className='pageBody'>
                <div className='newUserBody'>
                    <h2>Book Appointment</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Appointment Date</label><br></br>
                        <input type='date' name='adate'
                            value={adate} onChange={(e)=>{setAdate(e.target.value)}}/><br></br>
                        <label>Time Slot</label><br></br>
                        <select type='text' name='slot' 
                                value={slot} onChange={(e)=>{setSlot(e.target.value)}}>
                                    <option>Choose...</option>
                                    <option>10am - 11am</option>
                                    <option>11am - 12pm</option>
                                    <option>12pm - 1pm</option>
                                    <option>1pm - 2pm</option>
                                    <option>2pm - 3pm</option>
                                    <option>3pm - 4pm</option>
                                    <option>4pm - 5pm</option>
                        </select><br></br>
                        <button type='submit' className='loginbtn' disabled={!validateForm()}>Register</button>
                        <button id='newUserBack' onClick={navigateBack}>Back</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment
