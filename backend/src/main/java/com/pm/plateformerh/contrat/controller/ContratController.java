package com.pm.plateformerh.contrat.controller;

import com.pm.plateformerh.contrat.dto.ContratDto;
import com.pm.plateformerh.contrat.services.ContratService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contrats")
public class ContratController {

    private final ContratService contratService;

    @Autowired
    public ContratController(ContratService contratService) {
        this.contratService = contratService;
    }

    // Create a new Contrat
    @PostMapping
    public ResponseEntity<ContratDto> createContrat(@RequestBody ContratDto contratDto) {
        ContratDto createdContrat = contratService.createContrat(contratDto);
        return ResponseEntity.ok(createdContrat);
    }

    // Get all Contrats
    @GetMapping
    public ResponseEntity<List<ContratDto>> getAllContrats() {
        List<ContratDto> contrats = contratService.getAllContrats();
        return ResponseEntity.ok(contrats);
    }

    // Get a Contrat by ID
    @GetMapping("/{id}")
    public ResponseEntity<ContratDto> getContratById(@PathVariable Long id) {
        ContratDto contrat = contratService.getContratById(id);
        if (contrat != null) {
            return ResponseEntity.ok(contrat);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Update an existing Contrat
    @PutMapping("/{id}")
    public ResponseEntity<ContratDto> updateContrat(@PathVariable Long id, @RequestBody ContratDto contratDto) {
        ContratDto updatedContrat = contratService.updateContrat(id, contratDto);
        if (updatedContrat != null) {
            return ResponseEntity.ok(updatedContrat);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a Contrat by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContrat(@PathVariable Long id) {
        boolean deleted = contratService.deleteContrat(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
