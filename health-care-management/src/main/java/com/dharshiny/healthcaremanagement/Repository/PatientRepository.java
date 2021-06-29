package com.dharshiny.healthcaremanagement.Repository;

import com.dharshiny.healthcaremanagement.Model.PatientModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<PatientModel,String>{
    
}
