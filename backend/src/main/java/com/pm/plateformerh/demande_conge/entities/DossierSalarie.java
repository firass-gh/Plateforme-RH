package com.pm.plateformerh.demande_conge.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "dossier_salarie")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DossierSalarie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // just minimal for now
    private String employeeNumber;
}
