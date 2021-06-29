package com.dharshiny.healthcaremanagement.Repository;

import com.dharshiny.healthcaremanagement.Model.Prescription;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrescriptionRepository extends JpaRepository<Prescription,Integer>{
    
}
