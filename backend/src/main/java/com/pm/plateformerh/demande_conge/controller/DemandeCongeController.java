package com.pm.plateformerh.demande_conge.controller;

import com.pm.plateformerh.demande_conge.dto.DemandeCongeDTO;
import com.pm.plateformerh.demande_conge.dto.DemandeCongeDTO;
import com.pm.plateformerh.demande_conge.services.DemandeCongeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/demandes")
@RequiredArgsConstructor
public class DemandeCongeController {

    private final DemandeCongeService service;

    // POST: create new demande
    @PostMapping
    public DemandeCongeDTO createDemande(@RequestBody DemandeCongeDTO dto) {
        return service.createDemande(dto);
    }

    // GET: all demandes
    @GetMapping
    public List<DemandeCongeDTO> getAllDemandes() {
        return service.getAllDemandes();
    }

    // GET: demandes by user
    @GetMapping("/user/{userId}")
    public List<DemandeCongeDTO> getDemandesByUser(@PathVariable Long userId) {
        return service.getDemandesByUser(userId);
    }

    // GET: demandes by statut
    @GetMapping("/statut/{statut}")
    public List<DemandeCongeDTO> getDemandesByStatut(@PathVariable String statut) {
        return service.getDemandesByStatut(statut);
    }

    // DELETE: delete demande by ID
    @DeleteMapping("/{id}")
    public void deleteDemande(@PathVariable Long id) {
        service.deleteDemande(id);
    }
}
