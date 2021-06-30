import axios from 'axios'

const API_URL = 'https://8080-aedfdcadaeceebeeecafddadaaafdfbabacbdeb.examlyiopb.examly.io/';

class DataService {
    login(username,password,type){
        return axios.get(`${API_URL}/login/${username}/${password}/${type}`)
            .then((response)=>response.data)
    }
    createPatient(patient){
        return axios.post(`${API_URL}/createPatient/`,patient);
    }
    createLogin(login){
        return axios.post(`${API_URL}/createLogin/`,login);
    }
    createDoctor(doctor){
        return axios.post(`${API_URL}/createDoctor/`,doctor);
    }
    async getAllDoctors(){
        const response=await fetch (`${API_URL}/getAllDoctors`);
        const data=await response.json();
        return data;
    }
    deleteDoctor(demail){
        return axios.delete(`${API_URL}/deleteDoctor/${demail}`)
    }
    async doctorDetails(demail){
        const response=await fetch (`${API_URL}/doctorDetails/${demail}`);
        const data=await response.json();
        return data;
    }
    async getAllPatients(){
        const response=await fetch (`${API_URL}/getAllPatients`);
        const data=await response.json();
        return data;
    }
    createAppointment(appointment){
        return axios.post(`${API_URL}/createAppointment/`,appointment);
    }
    async getAllPatientAppointments(email){
        const response=await fetch (`${API_URL}/getAllPatientAppointments/${email}`);
        const data=await response.json();
        return data;
    }
    async getAllDoctorAppointments(email){
        const response=await fetch (`${API_URL}/getAllDoctorAppointments/${email}`);
        const data=await response.json();
        return data;
    }
    deleteAppointment(aid){
        return axios.delete(`${API_URL}/deleteAppointment/${aid}`)
    }
    async patientProfile(email){
        const response=await fetch (`${API_URL}/patientProfile/${email}`);
        const data=await response.json();
        return data;
    }
    async doctorProfile(email){
        const response=await fetch (`${API_URL}/doctorProfile/${email}`);
        const data=await response.json();
        return data;
    }
    patientEditProfile(patient){
        return axios.put(`${API_URL}/patientEditProfile/`,patient)
    }
    changeStatus(aid,status){
        return axios.put(`${API_URL}/changeStatus/${aid}/${status}`)
    }
    addPrescription(pres){
        return axios.post(`${API_URL}/addPrescription/`,pres);
    }
    async getPrescription(aid){
        const response=await fetch (`${API_URL}/getPrescription/${aid}`);
        const data=await response.json();
        return data;
    }
    deletePrescription(pid){
        return axios.delete(`${API_URL}/deletePrescription/${pid}`)
    }
    doctorEditProfile(doctor){
        return axios.put(`${API_URL}/doctorEditProfile/`,doctor)
    }
}

export default new DataService()
