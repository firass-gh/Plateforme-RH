package com.pm.plateformerh.demande_conge.repositories;


import com.pm.plateformerh.demande_conge.entities.DossierSalarie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DossierSalarieRepository extends JpaRepository<DossierSalarie, Long> {

    // Optional: find by employee number
    Optional<DossierSalarie> findByEmployeeNumber(String employeeNumber);
}
