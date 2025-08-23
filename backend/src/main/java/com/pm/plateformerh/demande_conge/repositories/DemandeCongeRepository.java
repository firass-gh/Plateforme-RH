package com.pm.plateformerh.demande_conge.repositories;


import com.pm.plateformerh.demande_conge.entities.DemandeConge;
import com.pm.plateformerh.user.entities.User;
import com.pm.plateformerh.demande_conge.entities.DossierSalarie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DemandeCongeRepository extends JpaRepository<DemandeConge, Long> {

    // find all demandes by user
    List<DemandeConge> findByUser(User user);

    // find all demandes by dossier
    List<DemandeConge> findByDossierSalarie(DossierSalarie dossierSalarie);

    // find by status
    List<DemandeConge> findByStatut(Enum statut);

    // find demandes waiting for validation
    List<DemandeConge> findByStatutOrderByDateDemandeAsc(Enum statut);
}
