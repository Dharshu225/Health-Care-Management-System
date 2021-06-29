import React,{useState,useEffect} from 'react';
import Header from './Header';
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';

function AddPrescription() {
    const location = useLocation();
    let history= useHistory();

    const[medicine,setMedicine]=useState("");
    const[timing,setTiming]=useState("");
    const[quantity,setQuantity]=useState("");
    const[days,setDays]=useState("");
    const[medlist,setMedlist]=useState([]);
    const aid=location.state.aid;

    useEffect(() => {
        document.title='Add Prescription';
        DataService.getPrescription(aid).then(res=>{setMedlist(res)});
    }, [])

    function validatePrescription(){
        return medicine!=="" && timing!=="" && quantity!=="Choose..." && days!=="";
    }

    const navigateBack=()=>{
        history.push({
            pathname: '/DoctorHome',
            state: {name: location.state.name,email:location.state.email}
          });
    }

    function handleSubmit(){
        let pres={aid:aid,medicine:medicine,timing:timing,quantity:quantity,days:days}
        if(DataService.addPrescription(pres)){
            history.push({
                pathname: '/DoctorHome',
                state: {name: location.state.name,email:location.state.email}
              });
        }
        
    }

    function deletePrescription(pid){
        DataService.deletePrescription(pid);
        window.location.reload();
    }

    return (
        <div>
            <Header />
            <div className='topnav'>
                <a href="/">Logout</a>
                <p>Welcome {location.state.name}</p>
            </div>
            <div className='pageBody'>
                <button id='addDoctor' onClick={navigateBack}>Back</button>
                <h2 style={{marginLeft:'60px'}}>Add Prescription</h2>
                <div className='newUserBody'>
                    <form>
                        <label>Medicine</label><br></br>
                        <input type='text' name='medicine' 
                                value={medicine} onChange={(e)=>{setMedicine(e.target.value)}}/><br></br>

                        <label>Total Days</label><br></br>
                        <input type='text' name='days' 
                                value={days} onChange={(e)=>{setDays(e.target.value)}}/><br></br>

                        <label>Quantity</label><br></br>
                        <input type='text' name='quantity' 
                                value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/><br></br>

                        <label>Timing</label><br></br>
                        <select type='text' name='timing' 
                                value={timing} onChange={(e)=>{setTiming(e.target.value)}}>
                                    <option>Choose...</option>
                                    <option>Morning</option>
                                    <option>Afternoon</option>
                                    <option>Evening</option>
                                    <option>Night</option>
                        </select><br></br>

                        <button onClick={()=>handleSubmit()} className='addPres' disabled={!validatePrescription()}>Add Medicine</button>
                    </form>
                </div>
                <div className='medicineList'>
                    <table>
                        <tr>
                            <th>Medicine</th>
                            <th>Total Days</th>
                            <th>Quantity</th>
                            <th>Timing</th>
                            <th>Action</th>
                        </tr>
                        {medlist.map(temp =>
                            <tr key = {temp.pid}>
                                <td>{temp.medicine}</td>
                                <td>{temp.days}</td>
                                <td>{temp.quantity}</td>
                                <td>{temp.timing}</td>
                                <td><button className='link' onClick={()=>deletePrescription(temp.pid)}>Delete</button></td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AddPrescription
