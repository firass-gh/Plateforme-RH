package com.pm.plateformerh.user.services;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    public void sendWelcomeEmail(String to, String username, String temporaryPassword) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("no-reply@plateforme-rh.com");
        message.setTo(to);
        message.setSubject("Bienvenue sur la Plateforme RH !");

        String emailText = "Bonjour et bienvenue sur la plateforme RH.\n\n"
                + "Un compte a été créé pour vous.\n\n"
                + "Voici vos identifiants de connexion temporaires :\n"
                + "Identifiant : " + username + "\n"
                + "Mot de passe : " + temporaryPassword + "\n\n"
                + "Pour des raisons de sécurité, nous vous recommandons vivement de changer votre mot de passe lors de votre première connexion.\n\n"
                + "Cordialement,\n"
                + "L'équipe RH";

        message.setText(emailText);
        mailSender.send(message);
    }
}
