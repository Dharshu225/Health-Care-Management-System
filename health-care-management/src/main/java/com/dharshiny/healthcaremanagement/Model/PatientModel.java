package com.dharshiny.healthcaremanagement.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="patient")
public class PatientModel {
    
    @Id
    @Column(name="email")
    private String email;
    @Column(name="name")
    private String name;
    @Column(name="age")
    private String age;
    @Column(name="gender")
    private String gender;
    @Column(name="dob")
    private String dob;
    @Column(name="blood")
    private String blood;
    @Column(name="address")
    private String address;
    @Column(name="city")
    private String city;
    @Column(name="district")
    private String district;
    @Column(name="state")
    private String state;
    @Column(name="pincode")
    private String pincode;
    @Column(name="mobile")
    private String mobile;
    @Column(name="password")
    private String password;
    @Column(name="type")
    private String type;
    
    public PatientModel() {
    }
    
    public PatientModel(String email, String name, String age, String gender, String dob, String blood, String address,
            String city, String district, String state, String pincode, String mobile, String password, String type) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.dob = dob;
        this.blood = blood;
        this.address = address;
        this.city = city;
        this.district = district;
        this.state = state;
        this.pincode = pincode;
        this.mobile = mobile;
        this.password = password;
        this.type = type;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }
    public void setAge(String age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }
    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getBlood() {
        return blood;
    }
    public void setBlood(String blood) {
        this.blood = blood;
    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }

    public String getDistrict() {
        return district;
    }
    public void setDistrict(String district) {
        this.district = district;
    }

    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }

    public String getPincode() {
        return pincode;
    }
    public void setPincode(String pincode) {
        this.pincode = pincode;
    }
    
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    
}
