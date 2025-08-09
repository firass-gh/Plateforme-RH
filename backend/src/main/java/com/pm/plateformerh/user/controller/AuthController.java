package com.pm.plateformerh.user.controller;

import com.pm.plateformerh.user.dto.AuthResponse;
import com.pm.plateformerh.user.dto.LoginRequest;
import com.pm.plateformerh.user.services.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Tag(name = "API d'Authentification", description = "Endpoints pour l'enregistrement et la connexion des utilisateurs")
public class AuthController {

    private final AuthService service;


    @Operation(
            summary = "Connecter un utilisateur existant",
            description = "Authentifie un utilisateur avec son email et son mot de passe. Retourne un jeton JWT si les identifiants sont corrects."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200",
                    description = "Authentification réussie",
                    content = { @Content(mediaType = "application/json", schema = @Schema(implementation = AuthResponse.class)) }
            ),
            @ApiResponse(
                    responseCode = "400",
                    description = "Requête invalide (champs manquants)",
                    content = @Content
            ),
            @ApiResponse(
                    responseCode = "401",
                    description = "Authentification échouée (email ou mot de passe incorrect)",
                    content = @Content
            )
    })
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(service.login(request));
    }
}
