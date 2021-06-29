package com.dharshiny.healthcaremanagement.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="appointment")
public class Appointment {
    
    @Id
    @Column(name="id")
    private int aid;
    @Column(name="patient")
    private String patient;
    @Column(name="doctor")
    private String doctor;
    @Column(name="adate")
    private String adate;
    @Column(name="slot")
    private String slot;
    @Column(name="status")
    private String status;
    @Column(name="dname")
    private String dname;
    @Column(name="pname")
    private String pname;

    public Appointment() {
    }

    public Appointment(int aid, String patient, String doctor, String adate, String slot, String status, String dname,
            String pname) {
        this.aid = aid;
        this.patient = patient;
        this.doctor = doctor;
        this.adate = adate;
        this.slot = slot;
        this.status = status;
        this.dname = dname;
        this.pname = pname;
    }

    public String getPname() {
        return pname;
    }
    public void setPname(String pname) {
        this.pname = pname;
    }

    public String getDname() {
        return dname;
    }
    public void setDname(String dname) {
        this.dname = dname;
    }

    public int getAid() {
        return aid;
    }
    public void setAid(int aid) {
        this.aid = aid;
    }

    public String getPatient() {
        return patient;
    }
    public void setPatient(String patient) {
        this.patient = patient;
    }

    public String getDoctor() {
        return doctor;
    }
    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    public String getAdate() {
        return adate;
    }
    public void setAdate(String adate) {
        this.adate = adate;
    }

    public String getSlot() {
        return slot;
    }
    public void setSlot(String slot) {
        this.slot = slot;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

}
