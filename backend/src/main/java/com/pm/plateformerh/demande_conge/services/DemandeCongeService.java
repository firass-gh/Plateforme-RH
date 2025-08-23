package com.pm.plateformerh.demande_conge.services;

import com.pm.plateformerh.demande_conge.dto.DemandeCongeDTO;
import com.pm.plateformerh.demande_conge.dto.DemandeCongeDTO;
import com.pm.plateformerh.demande_conge.entities.DemandeConge;
import com.pm.plateformerh.demande_conge.entities.DossierSalarie;
import com.pm.plateformerh.demande_conge.repositories.DemandeCongeRepository;
import com.pm.plateformerh.demande_conge.repositories.DossierSalarieRepository;
import com.pm.plateformerh.user.entities.User;
import com.pm.plateformerh.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DemandeCongeService {

    private final DemandeCongeRepository demandeCongeRepository;
    private final UserRepository userRepository;
    private final DossierSalarieRepository dossierRepository;

    // Create a new DemandeConge
    public DemandeCongeDTO createDemande(DemandeCongeDTO dto) {
        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        DossierSalarie dossier = dossierRepository.findById(dto.getDossierSalarieId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Dossier not found"));

        DemandeConge demande = DemandeCongeMapper.toEntity(dto, user, dossier);
        DemandeConge saved = demandeCongeRepository.save(demande);

        return DemandeCongeMapper.toDTO(saved);
    }

    // Get all demandes
    public List<DemandeCongeDTO> getAllDemandes() {
        return demandeCongeRepository.findAll().stream()
                .map(DemandeCongeMapper::toDTO)
                .collect(Collectors.toList());
    }

    // Get demandes by user
    public List<DemandeCongeDTO> getDemandesByUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        return demandeCongeRepository.findByUser(user).stream()
                .map(DemandeCongeMapper::toDTO)
                .collect(Collectors.toList());
    }

    // Get demandes by statut
    public List<DemandeCongeDTO> getDemandesByStatut(String statutStr) {
        return demandeCongeRepository.findAll().stream()
                .filter(d -> d.getStatut().name().equalsIgnoreCase(statutStr))
                .map(DemandeCongeMapper::toDTO)
                .collect(Collectors.toList());
    }

    // Delete a demande
    public void deleteDemande(Long id) {
        if (!demandeCongeRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Demande not found");
        }
        demandeCongeRepository.deleteById(id);
    }
}
