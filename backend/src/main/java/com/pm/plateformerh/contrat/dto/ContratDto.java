package com.pm.plateformerh.contrat.dto;


import lombok.*;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ContratDto {
    private Long idContrat;
    private String typeContrat;
    private LocalDate dateDebut;
    private LocalDate dateFin;
}
