package com.pm.plateformerh.user.entities;
import jakarta.persistence.*;

import java.time.LocalDate;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String nom;

    @NotNull
    private String prenom;

    @Column(unique = true, nullable = false)
    @Email
    private String email;

    @NotNull
    private String motDePasse;

    private LocalDate dateEntree;

    @Enumerated(EnumType.STRING)
    private Role role;
}