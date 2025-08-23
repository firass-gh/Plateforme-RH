package com.pm.plateformerh.demande_conge.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DemandeCongeDTO {

    private Long id; // <- required for responses
    private Long userId;
    private String userNom;
    private String userPrenom;
    private Long dossierSalarieId;
    private String dossierEmployeeNumber;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private String typeConge;
    private Integer nbJours;
    private String statut;
    private LocalDate dateDemande;
    private LocalDate dateValidation;
    private String motif;
    private String commentaireManager;
}
