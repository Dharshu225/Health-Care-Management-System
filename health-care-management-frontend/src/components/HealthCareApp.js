import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddDoctor from './AddDoctor';
import AddPrescription from './AddPrescription';
import AdminHome from './AdminHome';
import BookAppointment from './BookAppointment';
import DoctorDetails from './DoctorDetails';
import DoctorDetailsPatient from './DoctorDetailsPatient';
import DoctorEditProfile from './DoctorEditProfile';
import DoctorHome from './DoctorHome';
import DoctorList from './DoctorList';
import DoctorProfile from './DoctorProfile';
import Login from './Login';
import NewUser from './NewUser';
import PatientEditProfile from './PatientEditProfile';
import PatientHome from './PatientHome';
import PatientList from './PatientList';
import PatientProfile from './PatientProfile';
import ViewPrescription from './ViewPrescription';

class HealthCareApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/newUser" exact component={NewUser} />
                        <Route path="/AdminHome" exact component={AdminHome} />
                        <Route path="/PatientHome" exact component={PatientHome} />
                        <Route path="/DoctorHome" exact component={DoctorHome} />
                        <Route path="/addDoctor" exact component={AddDoctor} />
                        <Route path="/doctorDetails" exact component={DoctorDetails} />
                        <Route path="/doctorDetailsPatient" exact component={DoctorDetailsPatient} />
                        <Route path="/patientList" exact component={PatientList} />
                        <Route path="/doctorList" exact component={DoctorList} />
                        <Route path="/bookAppointment" exact component={BookAppointment} />
                        <Route path="/patientProfile" exact component={PatientProfile} />
                        <Route path="/doctorProfile" exact component={DoctorProfile} />
                        <Route path="/patientEditProfile" exact component={PatientEditProfile} />
                        <Route path="/addPrescription" exact component={AddPrescription} />
                        <Route path="/viewPrescription" exact component={ViewPrescription} />
                        <Route path="/doctorEditProfile" exact component={DoctorEditProfile} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default HealthCareApp
