package com.pm.plateformerh.contrat.mapper;

import com.pm.plateformerh.contrat.entity.Contrat;
import com.pm.plateformerh.contrat.dto.ContratDto;

public class ContratMapper {

    public static ContratDto toDto(Contrat contrat) {
        if (contrat == null) {
            return null;
        }

        ContratDto dto = new ContratDto();
        dto.setIdContrat(contrat.getIdContrat());
        dto.setTypeContrat(contrat.getTypeContrat());
        dto.setDateDebut(contrat.getDateDebut());
        dto.setDateFin(contrat.getDateFin());

        return dto;
    }

    public static Contrat toEntity(ContratDto dto) {
        if (dto == null) {
            return null;
        }

        Contrat contrat = new Contrat();
        contrat.setIdContrat(dto.getIdContrat());
        contrat.setTypeContrat(dto.getTypeContrat());
        contrat.setDateDebut(dto.getDateDebut());
        contrat.setDateFin(dto.getDateFin());

        return contrat;
    }
}
