package com.pm.plateformerh.user.services;

import com.pm.plateformerh.user.dto.CreateUserRequest;
import com.pm.plateformerh.user.entities.User;
import com.pm.plateformerh.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.apache.commons.lang3.RandomStringUtils;
import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;

    public User createUser(CreateUserRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new IllegalStateException("Un utilisateur avec l'email " + request.getEmail() + " existe déjà.");
        }

        String temporaryPassword = RandomStringUtils.randomAlphanumeric(12);

        var user = User.builder()
                .nom(request.getNom())
                .prenom(request.getPrenom())
                .email(request.getEmail())
                .motDePasse(passwordEncoder.encode(temporaryPassword))
                .role(request.getRole())
                .dateEntree(LocalDate.now())
                .build();

        userRepository.save(user);

        // Envoyer l'email avec le mot de passe en clair (non haché)
        emailService.sendWelcomeEmail(user.getEmail(), user.getEmail(), temporaryPassword);

        return user;
    }
}
