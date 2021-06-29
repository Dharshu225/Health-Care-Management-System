import React,{useState,useEffect} from 'react';
import Header from './Header';
import { useHistory,useLocation } from "react-router-dom";
import DataService from '../service/DataService';

function ViewPrescription() {
    const location = useLocation();
    let history= useHistory();

    const[medlist,setMedlist]=useState([]);

    useEffect(() => {
        document.title='View Prescription';
        DataService.getPrescription(location.state.aid).then(res=>{setMedlist(res)});
    }, [])

    const navigateBack=()=>{
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
                <button id='addDoctor' onClick={navigateBack}>Back</button>
                <h2 style={{marginLeft:'60px'}}>View Prescription</h2>
                <div className='medicineList'>
                    <table>
                        <tr>
                            <th>Medicine</th>
                            <th>Total Days</th>
                            <th>Quantity</th>
                            <th>Timing</th>
                        </tr>
                        {medlist.map(temp =>
                            <tr key = {temp.pid}>
                                <td>{temp.medicine}</td>
                                <td>{temp.days}</td>
                                <td>{temp.quantity}</td>
                                <td>{temp.timing}</td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewPrescription
