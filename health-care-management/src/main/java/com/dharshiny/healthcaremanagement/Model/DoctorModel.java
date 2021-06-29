package com.dharshiny.healthcaremanagement.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="doctor")
public class DoctorModel {
    
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
    @Column(name="qualification")
    private String qualification;
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
    @Column(name="experience")
    private String experience;
    @Column(name="special")
    private String special;

    public DoctorModel() {
    }
    
    public DoctorModel(String email, String name, String age, String gender, String dob, String blood, String address,
            String qualification, String district, String state, String pincode, String mobile, String password,
            String type, String experience, String special) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.dob = dob;
        this.blood = blood;
        this.address = address;
        this.qualification = qualification;
        this.district = district;
        this.state = state;
        this.pincode = pincode;
        this.mobile = mobile;
        this.password = password;
        this.type = type;
        this.experience = experience;
        this.special = special;
    }

    public String getSpecial() {
        return special;
    }
    public void setSpecial(String special) {
        this.special = special;
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

    public String getQualification() {
        return qualification;
    }
    public void setQualification(String qualification) {
        this.qualification = qualification;
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

    public String getExperience() {
        return experience;
    }
    public void setExperience(String experience) {
        this.experience = experience;
    }
    

}
