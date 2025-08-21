package com.pm.plateformerh.contrat.entity;


import jakarta.persistence.*;
import java.time.LocalDate;
import lombok.*;

@Entity
@Table(name = "contrat")
@Data                   // generates getters, setters, toString, equals, hashCode
@NoArgsConstructor      // generates default constructor
@AllArgsConstructor     // generates constructor with all fields
@Builder                // allows builder pattern
public class Contrat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idContrat;

    @Column(nullable = false)
    private String typeContrat;

    @Column(nullable = false)
    private LocalDate dateDebut;

    @Column
    private LocalDate dateFin; // nullable if permanent contract
}
