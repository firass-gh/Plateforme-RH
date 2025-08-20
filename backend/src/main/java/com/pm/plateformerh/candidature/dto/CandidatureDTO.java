package com.pm.plateformerh.candidature.dto;

import com.pm.plateformerh.candidature.entities.StatutCandidature;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CandidatureDTO {

    private Long id;

    private LocalDate dateCandidature;

    private StatutCandidature statut;

    private String cvPath;

    private String lettreMotivationPath;

    private String commentaires;

    private LocalDate dateEntretien;

    private String decisionFinale;

    // If you later use PosteOuvert, you can either embed its DTO or just expose its id:
    // private Long posteId;
}
