package com.dharshiny.healthcaremanagement.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.dharshiny.healthcaremanagement.Model.Appointment;
import com.dharshiny.healthcaremanagement.Model.DoctorModel;
import com.dharshiny.healthcaremanagement.Model.LoginModel;
import com.dharshiny.healthcaremanagement.Model.PatientModel;
import com.dharshiny.healthcaremanagement.Model.Prescription;
import com.dharshiny.healthcaremanagement.Repository.AppointmentRepository;
import com.dharshiny.healthcaremanagement.Repository.DoctorRepository;
import com.dharshiny.healthcaremanagement.Repository.LoginRepository;
import com.dharshiny.healthcaremanagement.Repository.PatientRepository;
import com.dharshiny.healthcaremanagement.Repository.PrescriptionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:8081")
@RestController
public class MainController {
    
    @Autowired
    private LoginRepository loginRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    @GetMapping(value="/login/{email}/{password}/{type}")
    public String login(@PathVariable String email, @PathVariable String password, 
                        @PathVariable String type){
            
        String valid="";
        List<LoginModel> user=new ArrayList<>();

        loginRepository.findAll().forEach(user::add);
        for(int i=0;i<user.size();i++){
            if(email.equals(user.get(i).getEmail()) && password.equals(user.get(i).getPassword())
                && type.equals(user.get(i).getType()))
                    valid=user.get(i).getName();
        }
        return valid;
    }

    @PostMapping(value="/createPatient")
    public void createPatient(@RequestBody PatientModel patient){
        patientRepository.save(patient);
    }

    @PostMapping(value="/createLogin")
    public void createLogin(@RequestBody LoginModel login){
        loginRepository.save(login);
    }
    
    @PostMapping(value="/createDoctor")
    public void createDoctor(@RequestBody DoctorModel doctor){
        doctorRepository.save(doctor);
    }

    @GetMapping(value="/getAllDoctors")
    public List<DoctorModel> getAllDoctors() {
        List<DoctorModel> doctors=new ArrayList<>();
        doctorRepository.findAll().forEach(doctors::add);
        return doctors;
    }
    
    @DeleteMapping("/deleteDoctor/{demail}")
    public void deleteDoctor(@PathVariable String demail){
        doctorRepository.deleteById(demail);
    }

    @GetMapping(value="/doctorDetails/{demail}")
    public Optional<DoctorModel> doctorDetails(@PathVariable String demail){
        return doctorRepository.findById(demail);
    }

    @GetMapping(value="/getAllPatients")
    public List<PatientModel> getAllPatients() {
        List<PatientModel> patients=new ArrayList<>();
        patientRepository.findAll().forEach(patients::add);
        return patients;
    }

    @PostMapping(value="/createAppointment")
    public void createAppointment(@RequestBody Appointment appointment){
        appointmentRepository.save(appointment);
    }

    @GetMapping(value="/getAllPatientAppointments/{email}")
    public List<Appointment> getAllPatientAppointments(@PathVariable String email) {
        List<Appointment> temp=new ArrayList<>();
        List<Appointment> appointment=new ArrayList<>();
        appointmentRepository.findAll().forEach(temp::add);
        for(int i=0;i<temp.size();i++){
            if(email.equals(temp.get(i).getPatient()))
            appointment.add(temp.get(i));
        }
        return appointment;
    }

    @GetMapping(value="/getAllDoctorAppointments/{email}")
    public List<Appointment> getAllDoctorAppointments(@PathVariable String email) {
        List<Appointment> temp=new ArrayList<>();
        List<Appointment> appointment=new ArrayList<>();
        appointmentRepository.findAll().forEach(temp::add);
        for(int i=0;i<temp.size();i++){
            if(email.equals(temp.get(i).getDoctor()))
            appointment.add(temp.get(i));
        }
        return appointment;
    }

    @DeleteMapping("/deleteAppointment/{aid}")
    public void deleteAppointment(@PathVariable int aid){
        appointmentRepository.deleteById(aid);
    }

    @GetMapping(value="/patientProfile/{email}")
    public Optional<PatientModel> patientProfile(@PathVariable String email){
        return patientRepository.findById(email);
    }

    @GetMapping(value="/doctorProfile/{email}")
    public Optional<DoctorModel> doctorProfile(@PathVariable String email){
        return doctorRepository.findById(email);
    }

    @PutMapping(value="/patientEditProfile")
    public void patientEditProfile(@RequestBody PatientModel patient){
        patientRepository.save(patient);
    }

    @PutMapping(value="/doctorEditProfile")
    public void doctorEditProfile(@RequestBody DoctorModel doctor){
        doctorRepository.save(doctor);
    }

    @PutMapping(value="/changeStatus/{aid}/{status}")
    public void changeStatus(@PathVariable int aid, @PathVariable String status){
        List<Appointment> temp=new ArrayList<>();
        appointmentRepository.findAll().forEach(temp::add);
        for(int i=0;i<temp.size();i++){
            if(aid==(temp.get(i).getAid())){
                temp.get(i).setStatus(status);
                appointmentRepository.save(temp.get(i));
            }
        }
    }

    @PostMapping(value="/addPrescription")
    public void addPrescription(@RequestBody Prescription pres){
        prescriptionRepository.save(pres);
    }

    @GetMapping(value="/getPrescription/{aid}")
    public List<Prescription> getPrescription(@PathVariable int aid){
        List<Prescription> temp=new ArrayList<>();
        List<Prescription> pres=new ArrayList<>();
        prescriptionRepository.findAll().forEach(temp::add);
        for(int i=0;i<temp.size();i++){
            if(aid==(temp.get(i).getAid())){
                pres.add(temp.get(i));
            }
        }
        return pres;
    }

    @DeleteMapping("/deletePrescription/{pid}")
    public void deletePrescription(@PathVariable int pid){
        prescriptionRepository.deleteById(pid);
    }

}
