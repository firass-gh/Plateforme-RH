package com.pm.plateformerh.demande_conge.services;

import com.pm.plateformerh.demande_conge.dto.DemandeCongeDTO;
import com.pm.plateformerh.demande_conge.dto.DemandeCongeDTO;
import com.pm.plateformerh.demande_conge.entities.DemandeConge;
import com.pm.plateformerh.demande_conge.entities.DossierSalarie;
import com.pm.plateformerh.demande_conge.entities.StatutDemande;
import com.pm.plateformerh.user.entities.User;

public class DemandeCongeMapper {

    // Entity -> DTO
    public static DemandeCongeDTO toDTO(DemandeConge demandeConge) {
        if (demandeConge == null) return null;

        return DemandeCongeDTO.builder()
                .id(demandeConge.getId())
                .userId(demandeConge.getUser() != null ? demandeConge.getUser().getId() : null)
                .userNom(demandeConge.getUser() != null ? demandeConge.getUser().getNom() : null)
                .userPrenom(demandeConge.getUser() != null ? demandeConge.getUser().getPrenom() : null)
                .dossierSalarieId(demandeConge.getDossierSalarie() != null ? demandeConge.getDossierSalarie().getId() : null)
                .dossierEmployeeNumber(demandeConge.getDossierSalarie() != null ? demandeConge.getDossierSalarie().getEmployeeNumber() : null)
                .dateDebut(demandeConge.getDateDebut())
                .dateFin(demandeConge.getDateFin())
                .typeConge(demandeConge.getTypeConge())
                .nbJours(demandeConge.getNbJours())
                .statut(String.valueOf(demandeConge.getStatut()))
                .dateDemande(demandeConge.getDateDemande())
                .dateValidation(demandeConge.getDateValidation())
                .motif(demandeConge.getMotif())
                .commentaireManager(demandeConge.getCommentaireManager())
                .build();
    }

    // DTO -> Entity for POST
    public static DemandeConge toEntity(DemandeCongeDTO dto, User user, DossierSalarie dossier) {
        if (dto == null) return null;

        StatutDemande statutEnum = StatutDemande.EN_ATTENTE; // default
        if (dto.getStatut() != null) {
            try {
                statutEnum = StatutDemande.valueOf(dto.getStatut());
            } catch (IllegalArgumentException e) {
                throw new RuntimeException("Invalid statut value: " + dto.getStatut());
            }
        }

        return DemandeConge.builder()
                .user(user)
                .dossierSalarie(dossier)
                .dateDebut(dto.getDateDebut())
                .dateFin(dto.getDateFin())
                .typeConge(dto.getTypeConge())
                .nbJours(dto.getNbJours())
                .statut(statutEnum)
                .motif(dto.getMotif())
                .commentaireManager(dto.getCommentaireManager())
                .build();
    }
}
