package com.pm.plateformerh.user.initializer;

import com.pm.plateformerh.user.entities.Role;
import com.pm.plateformerh.user.entities.User;
import com.pm.plateformerh.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {

        if (userRepository.findByEmail("admin@plateforme.com").isEmpty()) {
            User admin = User.builder()
                    .nom("Admin")
                    .prenom("Super")
                    .email("admin@plateforme.com")
                    .motDePasse(passwordEncoder.encode("AdminPassword123!"))
                    .role(Role.ADMIN)
                    .dateEntree(LocalDate.now())
                    .build();
            userRepository.save(admin);
            System.out.println(">>> Compte Administrateur par défaut créé avec succès <<<");
        }
    }
}
