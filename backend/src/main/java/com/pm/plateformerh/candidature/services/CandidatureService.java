package com.pm.plateformerh.candidature.services;

import com.pm.plateformerh.candidature.dto.CandidatureDTO;
import com.pm.plateformerh.candidature.entities.Candidature;
import com.pm.plateformerh.candidature.repository.CandidatureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CandidatureService {

    private final CandidatureRepository candidatureRepository;

    // Convert Entity -> DTO
    private CandidatureDTO toDto(Candidature candidature) {
        return CandidatureDTO.builder()
                .id(candidature.getId())
                .dateCandidature(candidature.getDateCandidature())
                .statut(candidature.getStatut())
                .cvPath(candidature.getCvPath())
                .lettreMotivationPath(candidature.getLettreMotivationPath())
                .commentaires(candidature.getCommentaires())
                .dateEntretien(candidature.getDateEntretien())
                .decisionFinale(candidature.getDecisionFinale())
                .build();
    }

    // Convert DTO -> Entity
    private Candidature toEntity(CandidatureDTO dto) {
        return Candidature.builder()
                .id(dto.getId())
                .dateCandidature(dto.getDateCandidature())
                .statut(dto.getStatut())
                .cvPath(dto.getCvPath())
                .lettreMotivationPath(dto.getLettreMotivationPath())
                .commentaires(dto.getCommentaires())
                .dateEntretien(dto.getDateEntretien())
                .decisionFinale(dto.getDecisionFinale())
                .build();
    }

    // CRUD methods

    public CandidatureDTO createCandidature(CandidatureDTO dto) {
        Candidature candidature = toEntity(dto);
        Candidature saved = candidatureRepository.save(candidature);
        return toDto(saved);
    }

    public List<CandidatureDTO> getAllCandidatures() {
        return candidatureRepository.findAll()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public Optional<CandidatureDTO> getCandidatureById(Long id) {
        return candidatureRepository.findById(id).map(this::toDto);
    }

    public Optional<CandidatureDTO> updateCandidature(Long id, CandidatureDTO dto) {
        return candidatureRepository.findById(id).map(existing -> {
            existing.setDateCandidature(dto.getDateCandidature());
            existing.setStatut(dto.getStatut());
            existing.setCvPath(dto.getCvPath());
            existing.setLettreMotivationPath(dto.getLettreMotivationPath());
            existing.setCommentaires(dto.getCommentaires());
            existing.setDateEntretien(dto.getDateEntretien());
            existing.setDecisionFinale(dto.getDecisionFinale());
            return toDto(candidatureRepository.save(existing));
        });
    }

    public void deleteCandidature(Long id) {
        candidatureRepository.deleteById(id);
    }
}
