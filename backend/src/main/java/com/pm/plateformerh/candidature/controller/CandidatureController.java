package com.pm.plateformerh.candidature.controller;

import com.pm.plateformerh.candidature.dto.CandidatureDTO;
import com.pm.plateformerh.candidature.services.CandidatureService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/candidatures")
@RequiredArgsConstructor
public class CandidatureController {

    private final CandidatureService candidatureService;

    @PostMapping
    public ResponseEntity<CandidatureDTO> create(@RequestBody CandidatureDTO dto) {
        return ResponseEntity.ok(candidatureService.createCandidature(dto));
    }

    @GetMapping
    public ResponseEntity<List<CandidatureDTO>> getAll() {
        return ResponseEntity.ok(candidatureService.getAllCandidatures());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CandidatureDTO> getById(@PathVariable Long id) {
        return candidatureService.getCandidatureById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<CandidatureDTO> update(@PathVariable Long id, @RequestBody CandidatureDTO dto) {
        return candidatureService.updateCandidature(id, dto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        candidatureService.deleteCandidature(id);
        return ResponseEntity.noContent().build();
    }
}
