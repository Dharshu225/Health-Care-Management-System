package com.dharshiny.healthcaremanagement.Repository;

import com.dharshiny.healthcaremanagement.Model.DoctorModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<DoctorModel,String>{
    
}
