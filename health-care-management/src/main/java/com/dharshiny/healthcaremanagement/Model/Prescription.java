package com.dharshiny.healthcaremanagement.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="prescription")
public class Prescription {
    
    @Id
    @Column(name="pid")
    private int pid;
    @Column(name="aid")
    private int aid;
    @Column(name="medicine")
    private String medicine;
    @Column(name="quantity")
    private String quantity;
    @Column(name="timing")
    private String timing;
    @Column(name="days")
    private String days;

    public Prescription() {
    }

    public Prescription(int pid, int aid, String medicine, String quantity, String timing, String days) {
        this.pid = pid;
        this.aid = aid;
        this.medicine = medicine;
        this.quantity = quantity;
        this.timing = timing;
        this.days = days;
    }

    public String getDays() {
        return days;
    }
    public void setDays(String days) {
        this.days = days;
    }

    public int getPid() {
        return pid;
    }
    public void setPid(int pid) {
        this.pid = pid;
    }

    public int getAid() {
        return aid;
    }
    public void setAid(int aid) {
        this.aid = aid;
    }

    public String getMedicine() {
        return medicine;
    }
    public void setMedicine(String medicine) {
        this.medicine = medicine;
    }

    public String getQuantity() {
        return quantity;
    }
    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getTiming() {
        return timing;
    }
    public void setTiming(String timing) {
        this.timing = timing;
    }
    

}
