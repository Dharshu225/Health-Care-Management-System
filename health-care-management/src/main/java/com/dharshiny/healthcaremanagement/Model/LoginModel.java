package com.dharshiny.healthcaremanagement.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="login")
public class LoginModel {

    @Id
    @Column(name="email")
    private String email;
    @Column(name="password")
    private String password;
    @Column(name="type")
    private String type;
    @Column(name="name")
    private String name;
    
    public LoginModel() {
    }

    public LoginModel(String email, String password, String type, String name) {
        this.email = email;
        this.password = password;
        this.type = type;
        this.name = name;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
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
