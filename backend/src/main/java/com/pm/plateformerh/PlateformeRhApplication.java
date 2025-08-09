package com.pm.plateformerh;

import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@SecurityScheme(
        name = "bearerAuth", // Un nom que nous donnons à notre schéma de sécurité
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        scheme = "bearer"
)
public class PlateformeRhApplication {

    public static void main(String[] args) {
        SpringApplication.run(PlateformeRhApplication.class, args);
    }

}
