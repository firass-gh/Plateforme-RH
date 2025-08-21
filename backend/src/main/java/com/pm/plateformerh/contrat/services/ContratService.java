package com.pm.plateformerh.contrat.services;

import com.pm.plateformerh.contrat.dto.ContratDto;
import com.pm.plateformerh.contrat.entity.Contrat;
import com.pm.plateformerh.contrat.mapper.ContratMapper;
import com.pm.plateformerh.contrat.repository.ContratRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ContratService {

    private final ContratRepository contratRepository;

    @Autowired
    public ContratService(ContratRepository contratRepository) {
        this.contratRepository = contratRepository;
    }

    // Create a new Contrat
    public ContratDto createContrat(ContratDto contratDto) {
        Contrat contrat = ContratMapper.toEntity(contratDto);
        Contrat savedContrat = contratRepository.save(contrat);
        return ContratMapper.toDto(savedContrat);
    }

    // Get all Contrats
    public List<ContratDto> getAllContrats() {
        return contratRepository.findAll()
                .stream()
                .map(ContratMapper::toDto)
                .collect(Collectors.toList());
    }

    // Get a Contrat by ID
    public ContratDto getContratById(Long id) {
        Optional<Contrat> contratOpt = contratRepository.findById(id);
        return contratOpt.map(ContratMapper::toDto).orElse(null);
    }

    // Update an existing Contrat
    public ContratDto updateContrat(Long id, ContratDto contratDto) {
        Optional<Contrat> contratOpt = contratRepository.findById(id);
        if (contratOpt.isPresent()) {
            Contrat contrat = contratOpt.get();
            contrat.setTypeContrat(contratDto.getTypeContrat());
            contrat.setDateDebut(contratDto.getDateDebut());
            contrat.setDateFin(contratDto.getDateFin());
            Contrat updatedContrat = contratRepository.save(contrat);
            return ContratMapper.toDto(updatedContrat);
        } else {
            return null; // Or throw an exception if you prefer
        }
    }

    // Delete a Contrat by ID
    public boolean deleteContrat(Long id) {
        if (contratRepository.existsById(id)) {
            contratRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
