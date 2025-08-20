package com.pm.plateformerh.candidature.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "candidatures")
public class Candidature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private LocalDate dateCandidature;

    @Enumerated(EnumType.STRING)
    private StatutCandidature statut;  // e.g., EN_ATTENTE, ACCEPTEE, REFUSEE

    private String cvPath;  // chemin du CV (optionnel)

    private String lettreMotivationPath;  // chemin de la lettre (optionnel)

    private String commentaires;  // remarques du recruteur

    private LocalDate dateEntretien;  // date de l’entretien si applicable

    private String decisionFinale;  // résultat final (embauché, non retenu...)



//    @ManyToOne(fetch = FetchType.LAZY)
   // @JoinColumn(name = "poste_id", nullable = false)
    //private PosteOuvert poste;  // FK vers PosteOuvert
}
