package com.pm.plateformerh.candidature.repository;

import com.pm.plateformerh.candidature.entities.Candidature;
import com.pm.plateformerh.candidature.entities.StatutCandidature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CandidatureRepository extends JpaRepository<Candidature, Long> {

    // Find all candidatures by status
    List<Candidature> findByStatut(StatutCandidature statut);

    // Find candidatures submitted on a specific date
    List<Candidature> findByDateCandidature(LocalDate date);

    // Find candidatures between two dates
    List<Candidature> findByDateCandidatureBetween(LocalDate start, LocalDate end);

    // Find by final decision
    List<Candidature> findByDecisionFinale(String decision);

    // Example: search candidatures containing a keyword in comments
    List<Candidature> findByCommentairesContainingIgnoreCase(String keyword);
}
