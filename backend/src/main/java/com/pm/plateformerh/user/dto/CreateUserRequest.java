package com.pm.plateformerh.user.dto;


import com.pm.plateformerh.user.entities.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateUserRequest {
    @NotBlank
    private String nom;
    @NotBlank
    private String prenom;
    @NotBlank @Email
    private String email;
    @NotNull
    private Role role;
}