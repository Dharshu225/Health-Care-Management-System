package com.dharshiny.healthcaremanagement.Repository;

import com.dharshiny.healthcaremanagement.Model.LoginModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<LoginModel,String>{
    
}
