package com.pm.plateformerh.contrat.repository;

import com.pm.plateformerh.contrat.entity.Contrat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContratRepository extends JpaRepository<Contrat, Long> {
    // You can add custom query methods here if needed
}
