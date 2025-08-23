package com.pm.plateformerh.demande_conge.entities;

import com.pm.plateformerh.user.entities.User;
import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "demande_conge")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DemandeConge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Relations
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "dossier_salarie_id", nullable = false)
    private DossierSalarie dossierSalarie;

    // Leave info
    @Column(name = "date_debut", nullable = false)
    private LocalDate dateDebut;

    @Column(name = "date_fin", nullable = false)
    private LocalDate dateFin;

    @Column(name = "type_conge", nullable = false)
    private String typeConge; // can later be Enum

    @Column(name = "nb_jours")
    private Integer nbJours;

    // Status & management
    @Enumerated(EnumType.STRING)
    @Column(name = "statut", nullable = false)
    @Builder.Default
    private StatutDemande statut = StatutDemande.EN_ATTENTE;

    @Column(name = "date_demande", nullable = false)
    @Builder.Default
    private LocalDate dateDemande = LocalDate.now();

    @Column(name = "date_validation")
    private LocalDate dateValidation;

    @Column(name = "motif")
    private String motif;

    @Column(name = "commentaire_manager")
    private String commentaireManager;
}
