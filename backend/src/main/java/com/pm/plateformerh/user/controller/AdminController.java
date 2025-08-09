package com.pm.plateformerh.user.controller;

import com.pm.plateformerh.user.dto.CreateUserRequest;
import com.pm.plateformerh.user.entities.User;
import com.pm.plateformerh.user.services.AdminService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@Tag(name = "API Administrateur", description = "Endpoints réservés aux administrateurs")
@SecurityRequirement(name = "bearerAuth")
public class AdminController {

    private final AdminService adminService;

    @PostMapping("/users")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Créer un nouvel utilisateur", description = "Réservé aux admins pour créer n'importe quel type de compte.")
    @ApiResponse(responseCode = "200", description = "Utilisateur créé avec succès")
    @ApiResponse(responseCode = "403", description = "Accès refusé. L'utilisateur n'est pas un administrateur.")
    @ApiResponse(responseCode = "400", description = "Données invalides ou l'email existe déjà.")
    public ResponseEntity<User> createUser(@Valid @RequestBody CreateUserRequest request) {
        User createdUser = adminService.createUser(request);
        createdUser.setMotDePasse(null);
        return ResponseEntity.ok(createdUser);
    }
}
